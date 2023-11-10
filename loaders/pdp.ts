import type {
  PdpReturn,
  Vehicle,
  VehicleRss,
} from "deco-sites/leadfy-dealers/components/types.ts";
import type { RequestURLParam } from "apps/website/functions/requestToParam.ts";

import { Parser } from "xml2js";

export interface Props {
  idloja: RequestURLParam;
  slug: RequestURLParam;
}

export default async function searchPdp(
  props: Props,
): Promise<PdpReturn> {
  const { slug, idloja } = props;

  const response = await fetch(
    `https://s3.agsistema.net/${idloja}/portals/c7power/vehicles.xml`,
  );

  const text = await response.text();

  const parser = new Parser();
  const json: VehicleRss = await parser.parseStringPromise(text);

  const vehicles = json.rss.channel[0].item;

  const pdpResult = {
    idLoja: idloja,
    storeDataFromApi: {
      title: json.rss.channel[0].title[0],
      description: json.rss.channel[0].description[0],
      logo: json.rss.channel[0].logo[0],
      whatsapp:
        json.rss.channel[0].locations[0].location[0].whatsapps[0].whatsapp[0]
          .number[0],
    },
    result: vehicles.filter((car: Vehicle) => {
      const titleCar = car["g:title"][0].toLowerCase().replaceAll("-", " ");
      const idCar = car["g:id"][0];
      const slugCleaned = decodeURIComponent(
        slug.replaceAll("-", " ").replaceAll("|", "/").toLowerCase(),
      );

      return slugCleaned.includes("oferta") && slugCleaned.replaceAll("|", "/").includes(titleCar) &&
        slugCleaned.includes(idCar);
    }),
  };

  return pdpResult || {};
}
