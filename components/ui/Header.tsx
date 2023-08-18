import Image from "deco-sites/std/components/Image.tsx";
import type { Image as LiveImage } from "deco-sites/std/components/types.ts";

import GoogleTagManager from "partytown/integrations/GTM.tsx";

export interface Social {
  logo: LiveImage;
  alt: string;
  href: string;
}

export interface Props {
  brandLogo?: LiveImage;
  brandName?: string;
  logo: LiveImage;
  alt: string;
  trackingId?: string;
  socialMedias: Social[];
}

export default function Header(
  { brandLogo, brandName, logo, alt, trackingId, socialMedias }: Props,
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
            <div class="h-14 w-[2px] bg-black"></div>
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
                <a href={social.href}>
                  <Image
                    src={social.logo}
                    width={40}
                    height={40}
                    alt={social.alt}
                  />
                </a>
              );
            })}
          </div>
        </div>
      </div>

      {trackingId && <GoogleTagManager trackingId={trackingId} />}
    </>
  );
}
