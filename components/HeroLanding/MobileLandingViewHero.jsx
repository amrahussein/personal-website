import Link from 'next/link';
import Amrologo from '../micros/Amrologo';
import ConnectMobileLanding from '../micros/ConnectMobileLanding';
import ContactMe from '../micros/ContactMe';
import FlexCenter from '../micros/FlexCenter';
import GoSocials from '../micros/GoSocials';
import Line from '../micros/Line';
import ButtonBrand from '../micros/buttons/ButtonBrand';
import AppHeading from '../micros/typography/AppHeading';
import AboutLandingInfo from './AboutLandingInfo';

export default function MobileLandingViewHero() {
  return (
    <main>
      <section className='flex'>
        <Amrologo />
        <ConnectMobileLanding />
      </section>

      <section>
        <Line />
        <article className='mt-5'>
          <aside className='py-5 pr-1 text-right text-4xl italic text-secondary opacity-70'>
            Nice to meet you!
          </aside>

          <p className='pt-4 text-lg'>
            Hey, my name is{' '}
            <strong className='text-secondary opacity-80'>
              Amr Abdelkamel
            </strong>
            .<br></br> I&apos;m passionate about developing and designing modern
            web apps with{' '}
            <em className='font-mono font-semibold underline'>usability</em> in
            mind.
          </p>

          <Line />
          <div className='pl-4'>
            <AboutLandingInfo />
          </div>

          {/* <p className='pt-5 text-lg'>
            Currently I&apos;m seeking opportunities as an entry position web
            developer.{' '}
          </p> */}
        </article>

        <article>
          <h2 className='pl-2 pt-7 text-3xl text-primary'>more about me?</h2>
          <Link href='/about'>
            <a>
              <ButtonBrand>take me to about page</ButtonBrand>
            </a>
          </Link>
        </article>

        <article className='pt-7'>
          <AppHeading styles='text-[1.4rem] sm:text-3xl'>
            It starts with a connection!
          </AppHeading>
          <h3 className='pl-5 pt-2 font-mono text-3xl italic text-gray-500'>
            reach me out on:
          </h3>
        </article>
      </section>

      <FlexCenter>
        <GoSocials />
      </FlexCenter>

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
