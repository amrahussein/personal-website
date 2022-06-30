import Link from 'next/link'
import Amrologo from '../micros/Amrologo'
import ContactMe from '../micros/ContactMe'
import GoSocials from '../micros/GoSocials'
import HeroMessage from '../micros/HeroMessage'
import Line from '../micros/Line'
import AppHeading from '../micros/typography/AppHeading'

export default function DesktopLandingViewHero() {
  return (
    <main className=''>
      <section>
        <article className=''>
          <aside className='italic py-5 text-4xl text-secondary opacity-70 text-right ... lg:mr-[-15rem]'>
            Nice to meet you!
          </aside>

          <div className='flex items-center ... lg:pl-28 md:pl-12 lg:space-x-20 sm:space-x-12 md:flex-fcol lg:flex-row'>
            <Amrologo />

            <div className='lg:pl-5 pt-8 '>

              <p className='pt-3'>
                Currently I&apos;m open for <em>opportunities</em> as a
                front-end developer.{' '}
                <span className='text-important italic font-mono tracking-wide pl-2'>
                  !important
                </span>
              </p>

              {/* <h2 className='pl-2 pt-2 text-3xl italic text-primary inline-block'>more about me?: </h2> */}
              <Link href='/about'>
                <a>
                  <h3 className='mt-2 px-4 py-1 ml-6 tracking-widest float-right bg-accent rounded-full transition duration-200 italic text-secodary hover:text-cool border-2 border-b-primary hover:border-b-cool border-x-0 border-t-0 '>
                    more about me?
                  </h3>
                </a>
              </Link>
            </div>
          </div>
        </article>
      </section>

      <Line />

      <section className='pt-6 space-y-14 '>
        {/* <article>
          
        </article> */}

        <article className='flex flex-col items-center'>
          <AppHeading styles='text-[1.4rem] sm:text-3xl'>
            It starts with a connection!
          </AppHeading>
          <h3 className='pl-5 pt-8 pb-2 tracking-wider font-mono text-3xl italic text-gray-500'>
            reach me out on:
          </h3>
          <div className='mb-32 pl-4 pt-5 flex flex-col space-y-6 justify-around max-w-4xl'>
            <GoSocials
              styleSocialItems='flex space-x-6'
              linkStyle='flex flex-col p-2 mb-8 w-24 h-24 space-y-4 rounded-3xl bg-accent hover:scale-125 hover:text-important hover:rotate-[5deg]'
              socialNames={false}
            />
            {/* <ContactMe /> */}
            <Line />

            <ContactMe />
          </div>
        </article>
      </section>
    </main>
  )
}
