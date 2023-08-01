import Image from "deco-sites/std/components/Image.tsx";
import type { Image as LiveImage } from "deco-sites/std/components/types.ts";

import type { SectionProps } from "$live/mod.ts";

import { Head } from "$fresh/runtime.ts";

import Gallery from "deco-sites/leadfy-dealers/components/ui/Gallery.tsx";
import WhatsAppButton from "deco-sites/leadfy-dealers/islands/WhatsAppButton.tsx";

import type { VehicleRss } from "deco-sites/leadfy-dealers/components/types.ts";
import { Parser } from "xml2js";

export interface Props {
  /** @title Id */
  /** @description Store id on Leadfy pannel */
  idLoja: string;
  label: string;
  banner?: {
    image?: LiveImage;
    altText?: string;
  };
  content: {
    title: string;
    subtitle: string;
    text: string;
  };
}

export default function StoresHome(
  { store, vehicles, storeDataFromApi }: SectionProps<typeof loader>,
) {
  if (store) {
    const { idLoja, banner, content } = store;
    return (
      <>
        <Head>
          <title>{content.title}</title>
          <link rel="icon" type="image/png" href={storeDataFromApi.logo}></link>
        </Head>
        <div>
          <div class="container text-center">
            <h1 class="text-[44px] my-3 louis-bold text-black">
              {content.title}
            </h1>
            <h2 class="text-[30px]">{content.subtitle}</h2>
            <p class="text-[20px] louis-bold text-[#1a1b1f] opacity-60">
              {content.text}
            </p>
          </div>
          <Gallery
            vehicles={vehicles}
            idLoja={idLoja}
            whatsapp={storeDataFromApi.whatsapp}
          />
        </div>
        <WhatsAppButton
          whatsapp={storeDataFromApi.whatsapp}
          logo={storeDataFromApi.logo}
          idLoja={idLoja}
        />
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
    title: json.rss.channel[0].title[0],
    description: json.rss.channel[0].description[0],
    logo: json.rss.channel[0].logo[0],
    whatsapp:
      json.rss.channel[0].locations[0].location[0].whatsapps[0].whatsapp[0]
        .number[0],
  };

  return { store, vehicles, storeDataFromApi };
};
