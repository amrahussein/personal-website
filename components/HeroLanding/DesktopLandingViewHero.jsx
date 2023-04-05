import Link from 'next/link';
import Amrologo from '../micros/Amrologo';
import ContactMe from '../micros/ContactMe';
import GoSocials from '../micros/GoSocials';
import Line from '../micros/Line';
import ButtonBrand from '../micros/buttons/ButtonBrand';
import AppHeading from '../micros/typography/AppHeading';
import AboutLandingInfo from './AboutLandingInfo';

export default function DesktopLandingViewHero() {
  return (
    <main className=''>
      <section>
        <article className=''>
          <aside className='py-5 text-right text-4xl italic text-secondary opacity-70 lg:mr-[-15rem]'>
            Nice to meet you!
          </aside>

          <div className='md:flex-fcol flex items-center sm:space-x-12 md:pl-12 lg:flex-row lg:space-x-20 lg:pl-28'>
            <Amrologo />

            <div className='pt-8 lg:pl-5 '>
              {/* <p className='pt-3'>
                Currently I&apos;m open for <em>opportunities</em> as a
                front-end developer.{' '}
                <span className='text-important italic font-mono tracking-wide pl-2'>
                  !important
                </span>
              </p> */}
              <Line />

              <AboutLandingInfo />

              {/* <h2 className='pl-2 pt-2 text-3xl italic text-primary inline-block'>more about me?: </h2> */}
              <Link href='/about'>
                <a>
                  <ButtonBrand>more about me?</ButtonBrand>
                </a>
              </Link>
            </div>
          </div>
        </article>
      </section>

      <Line />

      <section className='space-y-14 pt-6 '>

        <article className='flex flex-col items-center'>
          <AppHeading styles='text-[1.4rem] sm:text-3xl'>
            It starts with a connection!
          </AppHeading>
          <h3 className='pl-5 pt-8 pb-2 font-mono text-3xl italic tracking-wider text-gray-500'>
            reach me out on:
          </h3>
          <div className='mb-32 flex max-w-4xl flex-col justify-around space-y-6 pl-4 pt-5'>
            <GoSocials
              styleSocialItems='flex space-x-6'
              linkStyle='flex flex-col p-2 mb-8 w-24 h-24 space-y-4 rounded-3xl bg-accent hover:scale-125 hover:text-important hover:rotate-[5deg]'
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
