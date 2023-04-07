import Head from 'next/head';
import { useRouter } from 'next/router';
import Layout from '../components/app-layout/TheLayout';
import AppLink from '../components/micros/typography/AppLink';
import ProjectList from '../components/portofolio/ProjectList';

export default function Projects() {
  const { pathname } = useRouter();
  const siteName = 'https://amromoorie.com';
  const canonicalURL = siteName + pathname;

  return (
    <>
      <Head>
        <title>amromoorie | Portofolio</title>
        <link rel='canonical' href={canonicalURL} />

        <meta
          name='description'
          property='og:description'
          content="Here's a my portofolio. Hope you find it interesting!"
          key='description'
        />
      </Head>

      <Layout>
        {/* <h2 className='text-bg-secondary mx-11 my-14 text-right text-5xl italic  lg:mr-[-16rem]'>
          Portofolio
        </h2> */}
        <h3 className='italic'>my portofolio is under development...</h3>
        <h4 className='pb-5'>
          you can check my latest work on{' '}
          <AppLink href='https://github.com/amromoorie' rel='github' styles=''>
            Github repo
          </AppLink>
        </h4>

        <ProjectList />
      </Layout>
    </>
  );
}
