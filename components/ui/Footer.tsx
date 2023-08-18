import type { HTML } from "deco-sites/std/components/types.ts";
import Quilltext from "deco-sites/std/components/QuillText.tsx";

import Icon from "deco-sites/leadfy-dealers/components/ui/Icon.tsx";
import Slider from "deco-sites/leadfy-dealers/components/ui/Slider.tsx";
import SliderJS from "deco-sites/leadfy-dealers/islands/SliderJS.tsx";
import { Picture, Source } from "deco-sites/std/components/Picture.tsx";
import { useId } from "deco-sites/leadfy-dealers/sdk/useId.ts";
import type { Image as LiveImage } from "deco-sites/std/components/types.ts";

export interface Props {
  content: HTML[];
  interval?: 0;
}

export default function Footer({ content, interval }: Props) {
  const id = useId();
  return (
    <div class="w-full bg-[#6e6e6e] text-white">
      <div
        id={id}
        class="relative grid grid-cols-[48px_1fr_48px] sm:grid-cols-[120px_1fr_120px] grid-rows-[1fr_48px_1fr_64px] py-12 max-w-[1280px] mx-auto"
      >
        <Slider
          class={`carousel carousel-center w-full col-span-full row-span-full ${
            content.length < 5 ? "sm:justify-center" : ""
          }`}
        >
          {content?.map((text, index) => (
            <Slider.Item
              index={index}
              class="carousel-item justify-center w-full sm:w-[256px]"
            >
              <Quilltext html={text} />
            </Slider.Item>
          ))}
        </Slider>

        <div class={`block ${content.length <= 5 ? "sm:hidden" : ""}`}>
          <Buttons />
        </div>
        <SliderJS rootId={id} interval={interval && interval * 1e3} infinite />
      </div>
      <div class="flex justify-between max-w-[1280px] mx-auto py-4 border-t-[1px] border-white px-5">
        <span class="text-[14px] font-bold">
          © 2023 Todos os Direitos Reservados
        </span>
      </div>
    </div>
  );
}

function Buttons() {
  return (
    <>
      <div class="flex items-center justify-center z-10 absolute left-4 sm:left-[-16px] top-1/2">
        <Slider.PrevButton>
          <Icon
            class="text-[white]"
            size={16}
            id="ChevronLeft"
            strokeWidth={2}
          />
        </Slider.PrevButton>
      </div>
      <div class="flex items-center justify-center z-10 absolute right-4 sm:right-[-16px] top-1/2">
        <Slider.NextButton>
          <Icon
            class="text-[white]"
            size={16}
            id="ChevronRight"
            strokeWidth={2}
          />
        </Slider.NextButton>
      </div>
    </>
  );
}
