import { asset, Head } from "$fresh/runtime.ts";

function GlobalTags({ googleKey, facebookKey }: {
  googleKey?: string;
  facebookKey?: string;
}) {
  return (
    <Head>
      {/* Tailwind v3 CSS file */}
      <link href={asset("/styles.css")} rel="stylesheet" />

      <style
        dangerouslySetInnerHTML={{
          __html: `
          @font-face {
            font-family: 'Louis';
            src: url(${asset("/fonts/louis.otf")}) format('opentype');
            font-weight: 400;
            font-style: normal;
            font-display: swap;
          }
          @font-face {
            font-family: 'Louis Bold';
            src: url(${asset("/fonts/louisbold.otf")}) format('opentype');
            font-weight: 700;
            font-style: normal;
            font-display: swap;
          }
          .ql-editor{
            padding: 0px !important;
          }
          `,
        }}
      >
      </style>

      {/* Web Manifest */}
      <link rel="manifest" href={asset("/site.webmanifest")} />

      <meta name="google-site-verification" content={googleKey} />

      <meta name="facebook-domain-verification" content={facebookKey} />
    </Head>
  );
}

export default GlobalTags;
