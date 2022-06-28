import Head from 'next/head'
import { useRouter } from 'next/router'
import Childhood from '../components/about/Childhood'
import CoreValues from '../components/about/CoreValues'
import Devstart from '../components/about/Devstart'
import Intro from '../components/about/Intro'
import Postgraduation from '../components/about/Postgraduation'
import Techstack from '../components/about/Techstack'
import Layout from '../components/TheLayout'

export default function About() {
  const { pathname } = useRouter()
  const siteName = 'https://amromoorie.com'
  const canonicalURL = siteName + pathname

  return (
    <>
      <Head>
        <title>amromoorie | Let&apos;s connect!</title>
        <link rel='canonical' href={canonicalURL} />
      </Head>

      <Head>
        <meta
          property='og:description'
          content="Here's a summary about me. Let's get connected!"
          key='description'
        />
      </Head>
      <Layout>
        <article className='mb-16 sm:max-w-4xl prose text-gray-500 space-y-10 ... sm:text-lg'>
          {/* <aside className='p-4 pt-5 italic text-4xl text-secondary opacity-50 text-right sm:mr-[5rem] lg:mr-[-5rem] xl:mr-[-16rem]'>
            Nice to meet you!
          </aside> */}

          <Intro />
          <Childhood />
          <Devstart />
          <Postgraduation />
          <CoreValues />
          <Techstack />
        </article>
      </Layout>
    </>
  )
}
