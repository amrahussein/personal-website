import Head from 'next/head';
import { useRouter } from 'next/router';
import Layout from '../../components/app-layout/TheLayout';
import AppLink from '../../components/micros/typography/AppLink';

export default function Blog() {
  const { pathname } = useRouter();
  const siteName = 'https://amrahussein.com';
  const canonicalURL = siteName + pathname;

  return (
    <>
      <Head>
        <title>Blog | main page</title>
        <link rel='canonical' href={canonicalURL} />

        <meta
          name='description'
          property='og:description'
          content='Sharing my inspiration in my blog. Hope you find it interesting!'
          key='description'
        />
      </Head>
      <Layout>
        <div className='mb-96'>
          <h2 className='mx-11 my-11 text-3xl text-gray-600  '>
            very soon - no blog available at the moment
          </h2>
          <section>
            <article>
              {/* <Link href='/blog/fake-article'>
              go to article
            </Link> */}
            </article>

            <h2 className='mx-11 mt-11 pt-20 text-center text-3xl text-primary'>
              you can reach me at twitter:
              <AppLink rel='twitter' href='https://twitter.com/amrahussein'>
                {' '}
                <span>@amrahussein</span>
              </AppLink>
            </h2>
          </section>
        </div>
      </Layout>
    </>
  );
}
