import Head from 'next/head'
import { useRouter } from 'next/router'
import AppLink from '../components/micros/typography/AppLink'
import ProjectList from '../components/portofolio/ProjectList'
import Layout from '../components/TheLayout'

export default function Projects() {
  const { pathname } = useRouter()
  const siteName = 'https://amromoorie.com'
  const canonicalURL = siteName + pathname

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
        <h2 className='text-5xl italic text-right text-bg-secondary mx-11 my-14 ...  lg:mr-[-46rem]'>
          Portofolio
        </h2>
        <h3 className='italic'>
          Note that my portofolio is under development
        </h3>
        <h4 className='pb-5'>
          you can check my lates work on{' '}
          <AppLink href='https://github.com/amromoorie' rel='github' styles=''>
            Github repo
          </AppLink>
        </h4>

        <section className='ml-[-0.5rem] mb-44 max-w-4xl'>
          {/* <ProjectList /> */}
        </section>
      </Layout>
    </>
  )
}
