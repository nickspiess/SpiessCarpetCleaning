import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        
        {/* Google Analytics 4 */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              // Google Analytics 4 initialization code
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-PYXMGD7W9W');
            `,
          }}
        />
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-PYXMGD7W9W"></script>
        {/* End Google Analytics 4 */}
        
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
