// DO NOT EDIT. This file is generated by Fresh.
// This file SHOULD be checked into source version control.
// This file is automatically updated during development when running `dev.ts`.

import * as $_app from "./routes/_app.tsx";
import * as $api_airtable from "./routes/api/airtable.ts";
import * as $styles_css from "./routes/styles.css.ts";
import * as $Form from "./islands/Form.tsx";
import * as $SliderJS from "./islands/SliderJS.tsx";
import * as $VehicleOptional from "./islands/VehicleOptional.tsx";
import * as $WhatsAppFloatButton from "./islands/WhatsAppFloatButton.tsx";
import * as $WhatsAppHeaderButton from "./islands/WhatsAppHeaderButton.tsx";
import * as $WhatsAppModal from "./islands/WhatsAppModal.tsx";
import * as $WhatsAppNormalButton from "./islands/WhatsAppNormalButton.tsx";
import { type Manifest } from "$fresh/server.ts";

const manifest = {
  routes: {
    "./routes/_app.tsx": $_app,
    "./routes/api/airtable.ts": $api_airtable,
    "./routes/styles.css.ts": $styles_css,
  },
  islands: {
    "./islands/Form.tsx": $Form,
    "./islands/SliderJS.tsx": $SliderJS,
    "./islands/VehicleOptional.tsx": $VehicleOptional,
    "./islands/WhatsAppFloatButton.tsx": $WhatsAppFloatButton,
    "./islands/WhatsAppHeaderButton.tsx": $WhatsAppHeaderButton,
    "./islands/WhatsAppModal.tsx": $WhatsAppModal,
    "./islands/WhatsAppNormalButton.tsx": $WhatsAppNormalButton,
  },
  baseUrl: import.meta.url,
} satisfies Manifest;

export default manifest;
