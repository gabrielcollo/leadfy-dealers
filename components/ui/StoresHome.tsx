import Image from "deco-sites/std/components/Image.tsx";
import type { Image as LiveImage } from "deco-sites/std/components/types.ts";
import WhatsAppButton from "deco-sites/leadfy-dealers/components/ui/WhatsAppButton.tsx";

import type { SectionProps } from "$live/mod.ts";
import type { VehicleRss } from "deco-sites/leadfy-dealers/components/types.ts";

import { Head } from "$fresh/runtime.ts";

import Gallery from "deco-sites/leadfy-dealers/components/ui/Gallery.tsx";

import { Parser } from "xml2js";

export interface Profile {
  /** @title id */
  /** @description Store id on Leadfy pannel */
  idLoja: string;
}

export interface StoreInformations {
  label: string;
  profile: Profile;
  banner?: {
    image?: LiveImage;
    altText?: string;
  };
}

export interface Props {
  stores: StoreInformations[];
}

export default function StoresHome(
  { store, vehicles, storeDataFromApi }: SectionProps<typeof loader>,
) {
  if (store) {
    const { profile, banner } = store;
    return (
      <>
        <Head>
          <title>{storeDataFromApi.title}</title>
          <link rel="icon" type="image/png" href={storeDataFromApi.logo}></link>
        </Head>
        <div>
          <div class="container px-12 py-7 flex justify-center">
            <Image
              src={storeDataFromApi.logo}
              width={200}
              alt={storeDataFromApi.title}
            />
          </div>
          {banner && banner.image && (
            <div class="container">
              <Image
                src={banner.image}
                width={1100}
                class="w-full"
                alt={banner.altText || storeDataFromApi.title}
              />
            </div>
          )}
          <div class="container text-center">
            <h1 class="text-[44px] my-3 louis-bold text-black">
              {storeDataFromApi.title}
            </h1>
            <h2 class="text-[30px]">{storeDataFromApi.description}</h2>
          </div>
          <Gallery
            vehicles={vehicles}
            idLoja={profile.idLoja}
            whatsapp={storeDataFromApi.whatsapp}
          />
        </div>
        <WhatsAppButton whatsapp={storeDataFromApi.whatsapp} />
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
  { stores = [] }: Props,
  req: Request,
) => {
  const url = new URL(req.url);
  const idAtUrl = url.pathname.split("/").pop();

  const store = stores.find(({ profile }) => profile?.idLoja == idAtUrl);

  const response = await fetch(
    `https://s3.agsistema.net/${idAtUrl}/portals/c7power/vehicles.xml`,
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
