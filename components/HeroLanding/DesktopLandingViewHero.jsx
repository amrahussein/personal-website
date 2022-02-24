import Line from '../micros/Line'
import ContactMe from '../micros/ContactMe'
import AppHeading from '../micros/typography/AppHeading'
import Link from 'next/link'
import GoSocials from '../micros/GoSocials'
import Amrologo from '../micros/Amrologo'

export default function DesktopLandingViewHero() {
  return (
    <main>
      <section>
        <article className=''>
          <h2 className='italic py-5 mr-[5rem] text-4xl text-secondary opacity-50 text-right'>
            Nice to meet you!
          </h2>
          <div className='flex items-center justify-center space-x-20'>
            <Amrologo />

            <div>
              <p className='pl-5 pt-4 text-lg'>
                Hey, I am{' '}
                <strong className='text-secondary opacity-80'>
                  Amr Abdelkamel
                </strong>
                . I&apos;m passionate about web development.
              </p>

              <h3 className='p-4 pt-5 text-lg'>
                Currently I&apos;m seeking opportunities as an entry position
                web developer{' '}
                <span className='text-important tracking-wide opacity-50 pl-2'>
                  !important
                </span>
              </h3>
            </div>
          </div>
        </article>
      </section>

      <Line />

      <section className='pt-5 space-y-14 '>
        <article>
          <h2 className='pl-2 text-4xl text-primary'>more about me?</h2>
          <Link href='/about'>
            <a>
              <h2 className='font-mono italic pt-2 pl-4 text-2xl text-important underline hover:text-cool'>
                take me to about page
              </h2>
            </a>
          </Link>
        </article>

        <article>
          <AppHeading size='text-[1.4rem] sm:text-3xl'>
            It starts with a connection!
          </AppHeading>
          <h3 className='font-mono pl-5 pt-5 text-3xl italic text-gray-500'>
            reach me out on:
          </h3>
          <div className='mb-32 pl-4 pt-5 flex justify-around'>
            <GoSocials
              styleSocialItems='flex space-x-6'
              linkStyle='flex flex-col p-2 w-24 h-24 space-y-4 rounded-3xl bg-accent hover:scale-125 hover:text-important hover:rotate-[5deg]'
              socialNames={false}
            />
            <ContactMe />
          </div>
        </article>
      </section>
    </main>
  )
}
