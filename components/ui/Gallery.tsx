import Image from "deco-sites/std/components/Image.tsx";

import {
  clearWhatsApp,
  formatPrice,
} from "deco-sites/leadfy-dealers/sdk/format.ts";

import CallNowButton from "deco-sites/leadfy-dealers/components/ui/CallNowButton.tsx";

import type {
  Vehicle,
  Vehicles,
} from "deco-sites/leadfy-dealers/components/types.ts";

export default function Gallery(
  { vehicles, idLoja, phone }: {
    vehicles: Vehicles;
    idLoja: string;
    phone?: string;
  },
) {
  return (
    <div class="pt-5">
      <div class="container flex justify-center flex-wrap gap-2 px-5 sm:px-0 py-5">
        {vehicles.map((vehicle: Vehicle) => {
          return (
            <ProductCard
              vehicle={vehicle}
              idLoja={idLoja}
              phone={phone}
            />
          );
        })}
      </div>
    </div>
  );
}

export function ProductCard(
  { vehicle, idLoja, phone }: {
    vehicle: Vehicle;
    idLoja: string;
    phone?: string;
  },
) {
  return (
    <div class="p-5 flex flex-col items-center w-full sm:w-[calc(50%-8px)] shadow">
      <h3 class="text-[34px] text-black louis-bold text-center min-h-[102px] flex items-center ">
        {vehicle["g:title"][0].toUpperCase()}
      </h3>
      <span class="text-[32px] font-bold text-[#d1ad57] py-2">
        {formatPrice(Number(vehicle["g:price"][0]))}
      </span>
      <span class="text-[16px] font-semibold pb-2 min-h-[80px]">
        {vehicle["g:description"][0]}
      </span>
      <div class="px-0 sm:px-8">
        <a
          href={`/${idLoja}/${
            vehicle["g:title"][0].replaceAll(" ", "-").toLowerCase()
          }`}
          class="sm:min-h-[320px]"
        >
          <Image
            src={vehicle["g:image_link"][0]}
            width={516}
            class="hover:scale-[1.05] cursor-pointer transition-all duration-300"
          />
        </a>

        <div class="flex flex-col gap-3 py-3">
          <a
            href={`/${idLoja}/${
              vehicle["g:title"][0].replaceAll(" ", "-").toLowerCase()
            }`}
            class="bg-[#d1ad57] text-[white] tracking-[3px] w-full py-2.5 flex justify-center items-center whitespace-nowrap"
          >
            Tenho interesse
          </a>
          {phone && <CallNowButton phone={phone} />}
        </div>
      </div>
    </div>
  );
}
