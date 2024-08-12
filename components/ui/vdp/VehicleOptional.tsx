import type { Vehicle } from "deco-sites/leadfy-dealers/components/types.ts";

export interface Props {
    vehicle: Vehicle;
    showVehicleOptional?: boolean;
    vehicleOptionalTitle?: string;
}

export default function VehicleOptional(
  { vehicle, showVehicleOptional=false, vehicleOptionalTitle }: Props
) {

  return (
    <>
    {
      showVehicleOptional && (
        
        <div class="w-full my-5 flex flex-col gap-4 ">
          <h3 class="text-xl font-semibold">{vehicleOptionalTitle}</h3>
          <ul class="w-full grid grid-cols-2 gap-x-6 gap-2 pl-5 sm:grid-cols-3">
          {
            vehicle["acessorios"][0]["acessorio"].map((acessorio: string) => {

              return (
                <li class="list-disc">
                  {acessorio}
                </li>
              )
            })
          }
          </ul>
        </div>
      )
    }
    </>
  );
}
