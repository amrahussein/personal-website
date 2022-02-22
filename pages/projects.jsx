import Head from 'next/head'
import Layout from '../components/layout/TheLayout'
import AppLink from '../components/micros/typography/AppLink'

export default function Projects() {
  return (
    <>
      <Head>
        <title>my portofolio!</title>
        <meta
          property='og:description'
          content="Here's a my portofolio. Hope you find it interesting!"
          key='description'
        />
      </Head>

      <Layout>
        <h2 className='text-3xl text-important mx-11 my-11'>very soon</h2>
        <AppLink href='/' styles='ml-5 text-3xl underline'>
          take me home
        </AppLink>
      </Layout>
    </>
  )
}
