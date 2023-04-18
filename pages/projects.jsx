import Head from 'next/head';
import { useRouter } from 'next/router';
import Layout from '../components/app-layout/TheLayout';
import ProjectManager from '../components/portofolio/ProjectManager';

export default function Projects() {
  const { pathname } = useRouter();
  const siteName = 'https://amromoorie.com';
  const canonicalURL = siteName + pathname;

  return (
    <>
      <Head>
        <title>amromoorie | JS/TS | C#</title>
        <link rel='canonical' href={canonicalURL} />

        <meta
          name='description'
          property='og:description'
          content="a showcase of curated web apps developed using various technologies solving problems with clean code in mind: React, ASP.NET Core, Angular, Node.js, etc. Let's build something!"
          key='description'
        />
      </Head>

      <Layout>
        {/* <h3 className='italic'>my portofolio is under development...</h3>
        <h4 className='pb-5'>
          you can check my latest work on{' '}
          <AppLink href='https://github.com/amromoorie' rel='github' styles=''>
            Github repo
          </AppLink>
        </h4> */}

        <ProjectManager />
      </Layout>
    </>
  );
}
