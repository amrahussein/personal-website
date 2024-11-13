import Link from 'next/link';
import { useState } from 'react';
import ShowTechnicalSkills from '../about/ShowTechnicalSkills';
import ConnectMobileLanding from '../micros/ConnectMobileLanding';
import ContactMe from '../micros/ContactMe';
import GoSocials from '../micros/GoSocials';
import HeroMessage from '../micros/HeroMessage';
import Line from '../micros/Line';
import MeCard from '../micros/MeCard';
import ButtonBrand from '../micros/buttons/ButtonBrand';
import AppHeading from '../micros/typography/AppHeading';
import AboutLandingInfo from './AboutLandingInfo';

export default function MobileLandingViewHero() {
  const [technicalSkillsExpanded, setTechnicalSkillsExpanded] = useState(false);

  return (
    <main>
      <section className='flex'>
        <MeCard />
        <ConnectMobileLanding />
      </section>

      <section>
        <Line />
        <article className='mt-5'>
          <aside className='py-5 pr-1 text-right text-4xl italic text-secondary opacity-70 dark:text-gray-50'>
            Nice to meet you!
          </aside>

          <HeroMessage />

          <Line />
          <div className='pl-4'>
            <AboutLandingInfo />
          </div>
        </article>

        <article>
          <h2 className='pl-2 pt-7 text-3xl text-primary dark:text-slate-300'>
            More about?
          </h2>
          <Link href='/about'>
            <ButtonBrand>take me to About page</ButtonBrand>
          </Link>
        </article>

        <section className='pt-8'>
          <ShowTechnicalSkills
            open={technicalSkillsExpanded}
            setOpen={setTechnicalSkillsExpanded}
          />
        </section>

        <article className='pt-7'>
          <AppHeading styles='text-[1.4rem] sm:text-3xl'>
            It starts with a connection!
          </AppHeading>
          <h3 className='pl-5 pt-2 font-mono text-3xl italic text-gray-500 dark:text-slate-100'>
            reach me out on:
          </h3>
        </article>
      </section>

      <div className='flex flex-col items-center'>
        <GoSocials />
      </div>

      <Line />

      <section className=''>
        <article>
          {/* <h2 className='pl-2 text-4xl text-primary'>reach me on</h2> */}
          <div className='pl-4'>
            <ContactMe />
          </div>
        </article>
      </section>

      <Line />
    </main>
  );
}
