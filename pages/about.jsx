import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Childhood from '../components/about/Childhood';
import CoreSkills from '../components/about/CoreSkills';
import CoreValues from '../components/about/CoreValues';
import Devstart from '../components/about/Devstart';
import Intro from '../components/about/Intro';
import Postgraduation from '../components/about/Postgraduation';
import SkillsVisualized from '../components/about/SkillsVisualized';
import Layout from '../components/app-layout/TheLayout';
import FlexCenter from '../components/micros/FlexCenter';

export default function About() {
  const { pathname } = useRouter();
  const siteName = 'https://amromoorie.com';
  const canonicalURL = siteName + pathname;

  return (
    <>
      <Head>
        <title>amromoorie | Let&apos;s connect!</title>
        <link rel='canonical' href={canonicalURL} />
      </Head>

      <Head>
        <meta
          name='description'
          property='og:description'
          content="Here's a summary about me. Let's get connected!"
          key='description'
        />
      </Head>
      <Layout>
        <article className='mb-16 space-y-10 text-gray-500 sm:text-lg'>
          <SkillsVisualized />

          <FlexCenter>
            <button className='flex items-center rounded-full bg-accent px-8 py-2 tracking-widest text-secondary hover:bg-primary hover:text-white'>
              <Link href='/projects'>Go to Portofolio Page | See Projects</Link>
            </button>
          </FlexCenter>

          <Intro />
          <Childhood />
          <Devstart />
          <Postgraduation />
          <CoreValues />
          <CoreSkills />
        </article>
      </Layout>
    </>
  );
}
