import Head from 'next/head'
import Layout from '../components/layout/TheLayout'

export default function blog() {
  return (
    <>
      <Head>
        <title>Blog| main page</title>

        <meta
          property='og:description'
          content='Sharing my inspiration in my blog. Hope you find it interesting!'
          key='description'
        />
      </Head>
      <Layout>
          
      </Layout>
    </>
  )
}
