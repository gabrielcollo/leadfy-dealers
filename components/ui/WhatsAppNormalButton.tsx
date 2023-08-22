import { useUI } from "deco-sites/leadfy-dealers/sdk/useUI.ts";

import Image from "deco-sites/std/components/Image.tsx";
import type { Image as LiveImage } from "deco-sites/std/components/types.ts";

export default function WhatsAppNormalButton(
  { text, image, vehicle }: {
    text: string;
    image: LiveImage | undefined;
    vehicle?: string;
  },
) {
  const { displayWhatsAppModal, whatsAppModalInformation } = useUI();

  return (
    <>
      <div>
        <button
          id="wpp-link"
          type="button"
          class="bg-[white] text-[#d1ad57] border-[2px] border-[#d1ad57] font-bold tracking-[3px] w-full py-2.5 flex gap-2 justify-center items-center whitespace-nowrap"
          onClick={() => {
            whatsAppModalInformation.value.vehicle = vehicle || "";
            displayWhatsAppModal.value = true;
          }}
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
        </button>
      </div>
    </>
  );
}
