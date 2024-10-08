'use client';

import Head from 'next/head';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import Childhood from '../_components/about/Childhood';
import CoreSkills from '../_components/about/CoreSkills';
import CoreValues from '../_components/about/CoreValues';
import Devstart from '../_components/about/Devstart';
import Intro from '../_components/about/Intro';
import Postgraduation from '../_components/about/Postgraduation';
import ShowTechnicalSkills from '../_components/about/ShowTechnicalSkills';
import Layout from '../_components/app-layout/TheLayout';

export default function About() {
  const { pathname } = usePathname();
  const siteName = 'https://amrahussein.xyz';
  const canonicalURL = siteName + pathname;

  const [technicalSkillsExpanded, setTechnicalSkillsExpanded] = useState(false);

  return (
    <>
      <Head>
        <title>amrahussein | More About!</title>
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
        <article className='mb-16 space-y-10 text-gray-500 dark:text-slate-400 sm:text-lg'>
          <ShowTechnicalSkills
            open={technicalSkillsExpanded}
            setOpen={setTechnicalSkillsExpanded}
          />

          <div className='flex flex-col items-center'>
            <Link href='/projects'>
              <button
                className={`flex items-center rounded-full px-8 py-2 tracking-widest ${
                  technicalSkillsExpanded
                    ? 'border-2 border-primary bg-primary text-white hover:bg-accent hover:text-primary  dark:bg-primaryDark dark:text-slate-200 dark:hover:bg-primary'
                    : 'bg-accent text-secondary hover:bg-primary hover:text-white dark:bg-slate-700 dark:text-slate-200 dark:hover:bg-primary'
                }`}
              >
                Go to Portofolio Page | See Projects
              </button>
            </Link>
          </div>

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
