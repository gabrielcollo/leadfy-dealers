import Image from "deco-sites/std/components/Image.tsx";
import type { Image as LiveImage } from "deco-sites/std/components/types.ts";

import type { SectionProps } from "$live/mod.ts";

import { Head } from "$fresh/runtime.ts";

import Gallery from "deco-sites/leadfy-dealers/components/ui/Gallery.tsx";
import WhatsAppFloatButton from "deco-sites/leadfy-dealers/islands/WhatsAppFloatButton.tsx";

import type { VehicleRss } from "deco-sites/leadfy-dealers/components/types.ts";
import { Parser } from "xml2js";

export interface ProductCard {
  showPrice: boolean;
  textButton: string;
  textWhatsButton: string;
  whatsImage?: LiveImage;
}

export interface Props {
  /** @title Id */
  /** @description Store id on Leadfy pannel */
  idLoja: string;
  label: string;
  /** @description SEO Title */
  title: string;
  /** @description Show WhatsApp Button */
  whatsButton?: boolean;
  /** @description ProductCard informations */
  productCard: ProductCard;
}

export default function StoresHome(
  { store, vehicles, storeDataFromApi }: SectionProps<typeof loader>,
) {
  if (store) {
    const { idLoja, title, whatsButton, productCard } = store;
    return (
      <>
        <div>
          <Gallery
            vehicles={vehicles}
            idLoja={idLoja}
            productCard={productCard}
          />
        </div>
        {whatsButton && <WhatsAppFloatButton />}
      </>
    );
  }

  return (
    <div>
      <div class="container text-center">
        <h1 class="text-[64px] py-5">Dados da loja não cadastrados</h1>
      </div>
    </div>
  );
}

export const loader = async (
  store: Props,
  req: Request,
) => {
  const response = await fetch(
    `https://s3.agsistema.net/${store.idLoja}/portals/c7power/vehicles.xml`,
  );

  const text = await response.text();

  const parser = new Parser();
  const json: VehicleRss = await parser.parseStringPromise(text);

  const vehicles = json.rss.channel[0].item;

  const storeDataFromApi = {
    logo: json.rss.channel[0].logo[0],
    whatsapp:
      json.rss.channel[0].locations[0].location[0].whatsapps[0].whatsapp[0]
        .number[0],
  };

  return { store, vehicles, storeDataFromApi };
};
