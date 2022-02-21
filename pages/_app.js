import Head from 'next/head';
import '../styles/globals.css';
import {useState, useEffect} from 'react'
import { AppContext } from '../components/App.context';

// import { config } from '@fortawesome/fontawesome-svg-core'
// import '@fortawesome/fontawesome-svg-core/styles.css'
// config.autoAddCss = false

function MyApp({ Component, pageProps }) {
  const [width, setWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : undefined)
  const [mobile, setMobile] = useState(false)

  useEffect(() => {
    // matching tailwind breakpoint of md screens
    const breakpoint = 768
    window.addEventListener('resize', () => setWidth(window.innerWidth))
    console.log('window.innerWidth: ', window.innerWidth)
    width <= breakpoint ? setMobile(true) : setMobile(false)
    return () => window.addEventListener('resize', () => setWidth(window.innerWidth))
  }, [width])
  return (
    <>
      
      <Head>
          {/* <meta httpEquiv="Content-Security-Policy" content="default-src 'self'; font-src 'self' https://fonts.gstatic.com/; style-src 'self' https://fonts.googleapis.com/ 'unsafe-inline';" /> */}
        </Head>
      <Head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
      </Head>
      <Head>
        <title>amromoorie| Welcome to my page!</title>
        <meta
          property="og:title"
          content="Here is my website where I share a bit about me. Let's get connected!"
          key="title"
        />
      </Head>
     <AppContext.Provider value={mobile}>

      <Component {...pageProps} />
     </AppContext.Provider>
    </>
  );
}

export default MyApp;
