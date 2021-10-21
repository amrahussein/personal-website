// import { Fragment } from "react"
import Head from "next/head"
import Hero from '../components/Hero'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Welcome to my page!</title>

      </Head>
      <Component {...pageProps} />

      <Hero/>
    </>
    )
}

export default MyApp
