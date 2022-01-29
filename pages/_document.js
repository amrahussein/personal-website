import Document, { Html, Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
                <Head />

        
          {/* Global Site Tag (gtag.js) - Google Analytics */}
        {/* <Head>
        <meta name="description" content="personal webpage" />
          <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}', {
              page_path: window.location.pathname,
            });
          `,
            }}
          />
        </Head> */}
        {/* <meta httpEquiv="Content-Security-Policy" content="default-src 'self';font-src fonts.gstatic.com;style-src 'self' fonts.googleapis.com" /> */}
     
        
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}