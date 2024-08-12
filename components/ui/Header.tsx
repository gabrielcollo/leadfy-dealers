import Image from "apps/website/components/Image.tsx";
import type { ImageWidget as LiveImage } from "apps/admin/widgets.ts";

import GoogleTagManager from "partytown/integrations/GTM.tsx";

import WhatsAppModal from "deco-sites/leadfy-dealers/islands/WhatsAppModal.tsx";
import WhatsAppHeaderButton from "deco-sites/leadfy-dealers/islands/WhatsAppHeaderButton.tsx";

export interface Social {
  logo: LiveImage;
  alt: string;
  href: string;
}

export interface Props {
  idLoja: string;
  whatsAppNumber: string;
  brandLogo?: LiveImage;
  brandName?: string;
  logo: LiveImage;
  alt: string;
  trackingId?: string;
  socialMedias: Social[];
  whatsApp: {
    logo: LiveImage;
    alt: string;
  };
}

export default function Header(
  {
    idLoja,
    whatsAppNumber,
    brandLogo,
    brandName,
    logo,
    alt,
    trackingId,
    socialMedias,
    whatsApp,
  }: Props,
) {
  return (
    <>
      <div class="w-full header-shadow fixed bg-white h-[96px] sm:h-[112px] z-50">
        <div class="container px-6 sm:px-12 py-5 sm:py-7 flex justify-between">
          <div class="flex items-center gap-2 sm:gap-5">
            {brandLogo && (
              <Image
                src={brandLogo}
                width={80}
                alt={brandName}
              />
            )}
            <a href="/">
              <Image
                src={logo}
                width={200}
                height={56}
                alt={alt}
              />
            </a>
          </div>
          <div class="flex items-center gap-2">
            {socialMedias.map((social) => {
              return (
                <a href={social.href} target="_blank" rel="noopener noreferrer">
                  <Image
                    src={social.logo}
                    width={40}
                    height={40}
                    alt={social.alt}
                  />
                </a>
              );
            })}

            <WhatsAppHeaderButton
              logo={whatsApp.logo}
              alt={whatsApp.alt}
            />
          </div>
        </div>
      </div>

      {trackingId && <GoogleTagManager trackingId={trackingId} />}

      <WhatsAppModal
        logo={logo}
        idLoja={idLoja}
        phone={whatsAppNumber}
      />
    </>
  );
}
