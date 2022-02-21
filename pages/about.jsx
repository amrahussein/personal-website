import Head from 'next/head'
import Intro from '../components/about/Intro'
import Childhood from '../components/about/Childhood'
import Devstart from '../components/about/Devstart'
import Postgraduation from '../components/about/Postgraduation'
import Values from '../components/about/Values'
import Techstack from '../components/about/Techstack'
import Layout from '../components/layout/TheLayout'

export default function About() {
  return (
    <>
      <Head>
        <title>amromoorie| Welcome to my page!</title>
      </Head>

      <Head>
        <meta
          property='og:description'
          content="Here's a summary about me. Let's get connected!"
          key='description'
        />
      </Head>
      <Layout>
      <header></header>
        <article className='prose text-gray-600'>
          <h2 className='p-4 pt-5 text-4xl text-secondary opacity-50 text-right'>
            Nice to meet you!
          </h2>

          <Intro />
          <Childhood />
          <Devstart />
          <Postgraduation />
          <Values />
          <Techstack />
        </article>
      </Layout>
    </>
  )
}
