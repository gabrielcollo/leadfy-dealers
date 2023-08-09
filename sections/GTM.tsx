import GoogleTagManager from "partytown/integrations/GTM.tsx";

export interface Props {
  trackingId?: string;
}

export default function GTM({ trackingId }: Props) {
  return trackingId && <GoogleTagManager trackingId={trackingId} />;
}
