import type { LoaderReturnType } from "$live/types.ts";

import type { PdpReturn } from "deco-sites/leadfy-dealers/components/types.ts";

import type { Image as LiveImage } from "deco-sites/std/components/types.ts";

import Form from "deco-sites/leadfy-dealers/islands/Form.tsx";
import WhatsAppButton from "deco-sites/leadfy-dealers/islands/WhatsAppButton.tsx";
import Image from "deco-sites/std/components/Image.tsx";

import { Head } from "$fresh/runtime.ts";

export interface WhatsNormalButton {
  textWhatsButton: string;
  whatsImage?: LiveImage;
}

export interface Props {
  whatsNormalButton: WhatsNormalButton;
  /** @description Show WhatsApp Float Button */
  whatsFloatButton?: boolean;
  page: LoaderReturnType<PdpReturn | null>;
}

export default function StoresPdp(
  { page, whatsFloatButton = false, whatsNormalButton }: Props,
) {
  if (page) {
    const vehicle = page.result[0];
    const { storeDataFromApi, idLoja } = page;
    return (
      <>
        <Head>
          <title>{vehicle["g:title"][0]}</title>
          <link rel="icon" type="image/png" href={storeDataFromApi.logo}></link>
        </Head>
        <div>
          <div class="max-w-[1280px] py-[96px] sm:py-[112px] mx-auto flex flex-col sm:flex-row">
            <div
              class={`w-full sm:w-1/2 px-5 pt-5 sm:px-0 flex gap-3 sm:flex-wrap sm:pt-10 overflow-auto scrollbar-none ${
                vehicle["g:image_link"].length == 1 && "items-center"
              }`}
            >
              {vehicle["g:image_link"].map((image: string, idx: number) => {
                return (
                  <Image
                    class={`${
                      vehicle["g:image_link"].length > 1
                        ? "sm:w-[calc(50%-12px)]"
                        : "w-full"
                    }`}
                    src={image}
                    width={550}
                  />
                );
              })}
            </div>
            <div class="w-full px-5 sm:px-0 sm:w-1/2 sm:max-w-[450px] mx-auto pt-10 sticky top-0 self-start">
              <Form
                vehicle={vehicle}
                idLoja={idLoja}
                phone={storeDataFromApi.whatsapp}
                whatsNormalButton={whatsNormalButton}
              />
            </div>
          </div>
        </div>
        {whatsFloatButton && (
          <WhatsAppButton
            whatsapp={storeDataFromApi.whatsapp}
            logo={storeDataFromApi.logo}
            idLoja={idLoja}
            vehicleName={vehicle["g:title"][0]}
          />
        )}
      </>
    );
  }

  return <h1>Product Not Found</h1>;
}
