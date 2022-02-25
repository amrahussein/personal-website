import Head from 'next/head'
import '../styles/globals.css'
import { useState, useEffect } from 'react'
import { AppContext } from '../components/App.context'
import Script from 'next/script'
import { useRouter } from 'next/router'
import * as gtag from '../lib/gtag'
// import { config } from '@fortawesome/fontawesome-svg-core'
// import '@fortawesome/fontawesome-svg-core/styles.css'
// config.autoAddCss = false

function MyApp({ Component, pageProps }) {
  // GA related
  const router = useRouter()
  useEffect(() => {
    const handleRouteChange = (url) => {
      gtag.pageview(url)
    }
    router.events.on('routeChangeComplete', handleRouteChange)
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])

  //  Determine window inner width on initial rendering for responsive view
  const [width, setWidth] = useState(
    typeof window !== 'undefined' ? window.innerWidth : undefined
  )
  const [mobile, setMobile] = useState(false)

  useEffect(() => {
    // matching tailwind breakpoint of md screens
    const breakpoint = 768
    window.addEventListener('resize', () => setWidth(window.innerWidth))

    width <= breakpoint ? setMobile(true) : setMobile(false)
    return () =>
      window.addEventListener('resize', () => setWidth(window.innerWidth))
  }, [width])

  return (
    <>
      <Head>
        <title>amromoorie| Nice to meet you!</title>


        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />

        <meta name="author" content="Amr Abdelkamel" />


        <meta
          property='og:description'
          content="Passionate about web development. Here, I share a bit about me. Let's get connected!"
          key='description'
        />

        {/* <meta httpEquiv="Content-Security-Policy" content="default-src 'self'; font-src 'self' https://fonts.gstatic.com/; style-src 'self' https://fonts.googleapis.com/ 'unsafe-inline';" /> */}

        <link
          rel='apple-touch-icon'
          sizes='180x180'
          href='/apple-touch-icon.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='32x32'
          href='/favicon-32x32.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='16x16'
          href='/favicon-16x16.png'
        />
        <link rel='manifest' href='/site.webmanifest' />
        <link rel='mask-icon' href='/safari-pinned-tab.svg' color='#5bbad5' />
        <meta name='msapplication-TileColor' content='#da532c' />
        <meta name='theme-color' content='#ffffff' />
      </Head>

      {/* Global Site Tag (gtag.js) - Google Analytics */}
      <Script
        strategy='afterInteractive'
        src={`https://www.googletagmanager.com/gtag/js?id=${gtag.GA_TRACKING_ID}`}
      />
      <Script
        id='gtag-init'
        strategy='afterInteractive'
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${gtag.GA_TRACKING_ID}', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />

      <AppContext.Provider value={mobile}>
        <Component {...pageProps} />
      </AppContext.Provider>
    </>
  )
}

export default MyApp
