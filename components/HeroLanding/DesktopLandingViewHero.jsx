import Link from 'next/link';
import { useState } from 'react';
import ShowTechnicalSkills from '../about/ShowTechnicalSkills';
import ContactMe from '../micros/ContactMe';
import GoSocials from '../micros/GoSocials';
import HeroMessage from '../micros/HeroMessage';
import Line from '../micros/Line';
import MeCard from '../micros/MeCard';
import OpenForWork from '../micros/OpenForWork';
import ButtonBrand from '../micros/buttons/ButtonBrand';
import AppHeading from '../micros/typography/AppHeading';
import AboutLandingInfo from './AboutLandingInfo';

export default function DesktopLandingViewHero() {
  const [technicalSkillsExpanded, setTechnicalSkillsExpanded] = useState(false);

  return (
    <main className=''>
      <section>
        <article className=''>
          <aside className='py-5 text-right text-4xl italic text-secondary opacity-70 dark:text-gray-50 lg:mr-[-15rem]'>
            Nice to meet you!
          </aside>

          <div className='flex items-center sm:space-x-12 md:pl-12 lg:flex-row lg:space-x-20 lg:pl-28'>
            <MeCard />

            <div className='pt-8 lg:pl-5 '>
              <HeroMessage />

              <Line />

              <AboutLandingInfo />

              {/* <h2 className='pl-2 pt-2 text-3xl italic text-primary inline-block'>more about me?: </h2> */}
              <Link href='/about'>
                <a aria-label='Learn more about me and my experience'>
                  <ButtonBrand>More About</ButtonBrand>
                </a>
              </Link>
            </div>
          </div>
        </article>
      </section>

      <Line />

      <OpenForWork />

      <section className='pt-6'>
        <ShowTechnicalSkills
          open={technicalSkillsExpanded}
          setOpen={setTechnicalSkillsExpanded}
        />
      </section>

      <section className='space-y-14 pt-6 '>
        <article className='flex flex-col items-center'>
          <AppHeading styles='text-[1.4rem] sm:text-3xl'>
            It starts with a connection!
          </AppHeading>
          <h3 className='pl-5 pt-8 pb-2 font-mono text-3xl italic tracking-wider text-gray-500 dark:text-slate-100'>
            reach me out on:
          </h3>
          <div className='mb-32 flex max-w-4xl flex-col justify-around space-y-6 pl-4 pt-5'>
            <GoSocials
              styleSocialItems='flex space-x-6'
              linkStyle='flex flex-col p-2 mb-8 w-24 h-24 space-y-4 rounded-3xl bg-accent hover:scale-125 dark:hover:bg-primary dark:bg-secondary hover:rotate-[5deg]'
            />
            {/* <ContactMe /> */}
            <Line />

            <ContactMe />
          </div>
        </article>
      </section>
    </main>
  );
}
