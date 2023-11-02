import { useUI } from "deco-sites/leadfy-dealers/sdk/useUI.ts";

import Image from "apps/website/components/Image.tsx";

export default function WhatsAppHeaderButton(
  { logo, alt }: { logo: string; alt: string },
) {
  const {
    displayWhatsAppModal,
    whatsAppModalInformation,
    whatsAppModalPosition,
  } = useUI();

  return (
    <>
      <button
        onClick={() => {
          whatsAppModalInformation.value.vehicle = "";
          displayWhatsAppModal.value = !displayWhatsAppModal.value;
          whatsAppModalPosition.value = {
            left: window.innerWidth - 400,
            top: 120,
          };
        }}
      >
        <Image
          src={logo}
          width={40}
          height={40}
          alt={alt}
        />
      </button>
    </>
  );
}
