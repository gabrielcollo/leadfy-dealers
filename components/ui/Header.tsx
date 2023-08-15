import Image from "deco-sites/std/components/Image.tsx";
import type { Image as LiveImage } from "deco-sites/std/components/types.ts";

import GoogleTagManager from "partytown/integrations/GTM.tsx";

export interface Props {
  logo: LiveImage;
  alt: string;
  trackingId?: string;
}

export default function Header({ logo, alt, trackingId }: Props) {
  return (
    <>
      <div class="container px-12 py-7 flex justify-center">
        <a href="/">
          <Image
            src={logo}
            width={200}
            height={56}
            alt={alt}
          />
        </a>
      </div>
      {trackingId && <GoogleTagManager trackingId={trackingId} />}
    </>
  );
}
