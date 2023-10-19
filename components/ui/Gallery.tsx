import Image from "deco-sites/std/components/Image.tsx";

import {
  clearWhatsApp,
  formatPrice,
} from "deco-sites/leadfy-dealers/sdk/format.ts";

import WhatsAppNormalButton from "deco-sites/leadfy-dealers/islands/WhatsAppNormalButton.tsx";

import type { ProductCard } from "deco-sites/leadfy-dealers/components/ui/DealerHome.tsx";

import type {
  Vehicle,
  Vehicles,
} from "deco-sites/leadfy-dealers/components/types.ts";

export default function Gallery(
  { vehicles, idLoja, productCard }: {
    vehicles: Vehicles;
    idLoja: string;
    productCard: ProductCard;
  },
) {
  const orderedVehicles = vehicles.sort(function (a, b) {
    return Number(a["g:price"][0]) - Number(b["g:price"][0]);
  });
  return (
    <div class="pt-5">
      <div class="max-w-[1280px] mx-auto flex justify-center flex-wrap gap-2 px-5 sm:px-0 py-5">
        {orderedVehicles.map((vehicle: Vehicle) => {
          return (
            <ProductCard
              vehicle={vehicle}
              idLoja={idLoja}
              productCard={productCard}
            />
          );
        })}
      </div>
    </div>
  );
}

export function ProductCard(
  { vehicle, idLoja, productCard }: {
    vehicle: Vehicle;
    idLoja: string;
    productCard: ProductCard;
  },
) {
  return (
    <div class="p-5 flex flex-col items-center w-full sm:w-[calc(50%-8px)] shadow">
      <h3 class="text-[34px] text-primary louis-bold text-center min-h-[102px] flex items-center ">
        {vehicle["g:title"][0].toUpperCase()}
      </h3>
      <span class="text-[16px] text-primary font-semibold pb-2 min-h-[80px]">
        {vehicle["g:description"][0]}
      </span>
      {productCard.showPrice && (
        <span class="text-[32px] text-secondary font-bold py-2">
          {formatPrice(Number(vehicle["g:price"][0]))}
        </span>
      )}

      <div class="px-0 sm:px-8">
        <a
          href={`/${idLoja}/${
            vehicle["g:title"][0].replaceAll(" ", "-").toLowerCase()
          }-${vehicle["g:id"][0]}`}
          class="sm:min-h-[320px]"
        >
          <Image
            src={vehicle["g:image_link"][0]}
            width={515}
            height={290}
            class="hover:scale-[1.05] cursor-pointer transition-all duration-300"
          />
        </a>

        <div class="flex flex-col gap-3 py-3">
          <a
            href={`/${idLoja}/${
              vehicle["g:title"][0].replaceAll(" ", "-").toLowerCase()
            }-${vehicle["g:id"][0]}`}
            class="bg-accent text-base-200 tracking-[3px] w-full py-2.5 flex justify-center items-center whitespace-nowrap font-bold"
          >
            {productCard.textButton}
          </a>
          <WhatsAppNormalButton
            text={productCard.textWhatsButton}
            image={productCard.whatsImage}
            vehicle={vehicle["g:title"][0]}
          />
        </div>
      </div>
    </div>
  );
}
