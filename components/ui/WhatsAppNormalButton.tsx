import { clearWhatsApp } from "deco-sites/leadfy-dealers/sdk/format.ts";
import { asset } from "$fresh/runtime.ts";

import Image from "deco-sites/std/components/Image.tsx";
import type { Image as LiveImage } from "deco-sites/std/components/types.ts";

export default function WhatsAppNormalButton(
  { phone, text, image }: {
    phone: string;
    text: string;
    image: LiveImage | undefined;
  },
) {
  return (
    <a
      href={`https://api.whatsapp.com/send?text=Olá, gostaria de mais informações sobre as ofertas imperdíveis!&phone=${
        clearWhatsApp(phone)
      }`}
      target="_blank"
      class="bg-[white] text-[#d1ad57] border-[2px] border-[#d1ad57] font-bold tracking-[3px] w-full py-2.5 flex gap-2 justify-center items-center whitespace-nowrap"
    >
      {image && (
        <Image
          src={image}
          width={20}
          height={20}
          alt={"WhatsApp Logo"}
        />
      )}
      {text}
    </a>
  );
}
