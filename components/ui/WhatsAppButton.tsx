export default function WhatsAppButton({ whatsapp }: { whatsapp: string }) {
  return (
    <a
      href={`https://api.whatsapp.com/send/?phone=${whatsapp}&text&type=phone_number&app_absent=0`}
      target="_blank"
      className="fixed bottom-5 right-5 w-[100px]"
    >
      <img
        src="https://uploads-ssl.webflow.com/64a7336626ed51cb1c8a8443/64a75375a0e0fe3a05a965fb_4485687.png"
        alt="WhatsApp"
      />
    </a>
  );
}
