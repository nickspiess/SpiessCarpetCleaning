import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* Favicon & Theme */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/images/logo.png" />
        <meta name="theme-color" content="#05a9e2" />
        <meta name="msapplication-TileColor" content="#05a9e2" />

        {/* Local SEO - Geo Tags (Woodbury, MN - serving Twin Cities) */}
        <meta name="geo.region" content="US-MN" />
        <meta name="geo.placename" content="Woodbury, Minnesota" />
        <meta name="geo.position" content="44.9239;-92.9594" />
        <meta name="ICBM" content="44.9239, -92.9594" />

        {/* Google Analytics 4 + Google Ads Conversion Tracking */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-PYXMGD7W9W"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-PYXMGD7W9W');
              gtag('config', 'AW-401941168');

              // Track phone number clicks
              document.addEventListener('click', function(e) {
                var link = e.target.closest('a[href^="tel:"]');
                if (link) {
                  gtag('event', 'phone_click', {
                    'event_category': 'contact',
                    'event_label': link.href
                  });
                }
              });
            `,
          }}
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}