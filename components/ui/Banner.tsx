import Image from "deco-sites/std/components/Image.tsx";
import type { Image as LiveImage } from "deco-sites/std/components/types.ts";
import { Picture, Source } from "deco-sites/std/components/Picture.tsx";

export interface Props {
  bannerDesktop: LiveImage;
  bannerMobile: LiveImage;
  alt: string;
}

export default function Banner({ bannerDesktop, bannerMobile, alt }: Props) {
  return (
    <div class="container">
      <Picture preload={true}>
        <Source
          media="(max-width: 1024px)"
          fetchPriority={"high"}
          src={bannerMobile}
          width={360}
        />
        <Source
          media="(min-width: 1025px)"
          fetchPriority={"low"}
          src={bannerDesktop}
          width={1440}
        />
        <img
          class="w-full"
          loading={"eager"}
          src={bannerDesktop}
          alt={alt}
        />
      </Picture>
    </div>
  );
}
