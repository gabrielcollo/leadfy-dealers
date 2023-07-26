import Image from "deco-sites/std/components/Image.tsx";
import type { Image as LiveImage } from "deco-sites/std/components/types.ts";

import type { SectionProps } from "$live/mod.ts";

import { Head } from "$fresh/runtime.ts";

import Gallery from "deco-sites/leadfy-dealers/components/ui/Gallery.tsx";

export interface Profile {
  whatsappNumber: string;
  logo: LiveImage;
}

export interface Props {
  /** @title Id */
  /** @description Store id on Leadfy pannel */
  idLoja: string;
  label: string;
  profile: Profile;
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
  { store, vehicles }: SectionProps<typeof loader>,
) {
  if (store) {
    const { idLoja, profile, banner, content } = store;
    return (
      <>
        <Head>
          <title>{content.title}</title>
          <link rel="icon" type="image/png" href={profile.logo}></link>
        </Head>
        <div>
          <div class="container px-12 py-7 flex justify-center">
            <Image
              src={profile.logo}
              width={200}
              alt={content.title}
            />
          </div>
          {banner && banner.image && (
            <div class="container">
              <Image
                src={banner.image}
                width={1100}
                class="w-full"
                alt={banner.altText || content.title}
              />
            </div>
          )}
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
            whatsapp={profile.whatsappNumber}
          />
        </div>
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
    `https://autogestor-dealers.s3.us-west-2.amazonaws.com/${store.idLoja}/portals/dealersites/vehicles.json`,
  );
  const vehicles = await response.json();

  return { store, vehicles };
};
