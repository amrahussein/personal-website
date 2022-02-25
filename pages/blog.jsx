import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'
import Layout from '../components/TheLayout'
import AppLink from '../components/micros/typography/AppLink'

export default function Blog() {
  const { pathname } = useRouter()
  const siteName = 'https://amromoorie.com'
  const canonicalURL = siteName + pathname
  
  return (
    <>
      <Head>
        <title>Blog| main page</title>
        <link rel='canonical' href={canonicalURL} />

        <meta
          property='og:description'
          content='Sharing my inspiration in my blog. Hope you find it interesting!'
          key='description'
        />
      </Head>
      <Layout>
      <h2 className='text-3xl text-important mx-11 my-11'>very soon</h2>
        <AppLink href='/' styles='ml-5 text-3xl underline'>
          take me home
        </AppLink>
        <section>
          <article>
            <Link href='/blog/fake-article'>
              <a>go to article</a>
            </Link>
          </article>
        </section>

          
      </Layout>
    </>
  )
}
