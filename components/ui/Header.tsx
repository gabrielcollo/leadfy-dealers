import Image from "deco-sites/std/components/Image.tsx";
import type { Image as LiveImage } from "deco-sites/std/components/types.ts";

export interface Props {
  logo: LiveImage;
  alt: string;
}

export default function Header({ logo, alt }: Props) {
  return (
    <div class="container px-12 py-7 flex justify-center">
      <a href="/">
        <Image
          src={logo}
          width={200}
          alt={alt}
        />
      </a>
    </div>
  );
}
