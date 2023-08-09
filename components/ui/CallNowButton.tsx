import { clearWhatsApp } from "deco-sites/leadfy-dealers/sdk/format.ts";

export default function CallNowButton({ phone }: { phone: string }) {
  return (
    <a
      href={`tel:${clearWhatsApp(phone)}`}
      target="_blank"
      class="bg-[#456bf4] text-[white] tracking-[3px] w-full py-2.5 flex justify-center items-center whitespace-nowrap"
    >
      Ligue Agora
    </a>
  );
}
