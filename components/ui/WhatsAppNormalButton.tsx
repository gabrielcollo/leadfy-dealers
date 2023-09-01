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
  const {
    displayWhatsAppModal,
    whatsAppModalInformation,
    whatsAppModalPosition,
  } = useUI();

  return (
    <>
      <div>
        <button
          id="wpp-link"
          type="button"
          class="bg-[white] text-[#d1ad57] border-[2px] border-[#d1ad57] font-bold tracking-[3px] w-full py-2.5 flex gap-2 justify-center items-center whitespace-nowrap"
          onClick={(e) => {
            whatsAppModalInformation.value.vehicle = vehicle || "";
            displayWhatsAppModal.value = true;

            let cx = e.clientX,
              cy = e.clientY - 350;
            if (cx < 0) {
              cx = 0;
            }
            if (cy < 0) {
              cy = 0;
            }
            if (window.innerWidth - e.clientX + 350 < 350) {
              console.log("entrou");
              cx = window.innerWidth - 350;
            }
            if (e.clientY > window.innerHeight - 350 + 350) {
              console.log("entrou2");
              cy = window.innerHeight - 350;
            }

            whatsAppModalPosition.value = {
              top: cy,
              left: cx,
            };
            console.log(e);
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
