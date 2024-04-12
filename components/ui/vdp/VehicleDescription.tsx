import type { HTML } from "deco-sites/std/components/types.ts";

export interface Props {
    description?: HTML
}

export default function VehicleDescription(
    {description}: Props
){
    
    return (
      <>
        {
            (description != "") ?
                <div 
                    class="w-full"
                    dangerouslySetInnerHTML={{ __html: description }}
                />
            :
            null 
        }
      </>
    );
}