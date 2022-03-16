import Head from 'next/head'
import { useRouter } from 'next/router'
import AppLink from '../components/micros/typography/AppLink'
import Layout from '../components/TheLayout'

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

        <div className='mb-96'>
        <h2 className='text-3xl text-gray-600 mx-11 my-11  '>
          very soon - no blog available at the moment
        </h2>
        <section>
          <article>
            {/* <Link href='/blog/fake-article'>
              <a>go to article</a>
            </Link> */}
          </article>

          <h2 className='text-3xl mx-11 mt-11 pt-20 text-center text-primary'>
            you can react me at twitter:
            <AppLink rel='twitter' href='https://twitter.com/amromoorie'>
              {' '}
              <span>@amromoorie</span>
            </AppLink>
          </h2>
        </section>
        </div>
      </Layout>
    </>
  )
}
