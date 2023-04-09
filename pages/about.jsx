import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';
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

  const [visualizedSkillsExpanded, setVisualizedSkillsExpanded] =
    useState(false);

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
          <SkillsVisualized
            open={visualizedSkillsExpanded}
            setOpen={setVisualizedSkillsExpanded}
          />

          <FlexCenter>
            <Link href='/projects' passHref>
              <button
                className={`flex items-center rounded-full px-8 py-2 tracking-widest ${
                  visualizedSkillsExpanded
                    ? 'border-2 border-primary bg-primary text-white hover:bg-accent hover:text-primary'
                    : 'bg-accent text-secondary hover:bg-primary hover:text-white'
                }`}
              >
                Go to Portofolio Page | See Projects
              </button>
            </Link>
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
