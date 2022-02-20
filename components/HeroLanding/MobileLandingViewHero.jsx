import Amrologo from '../micros/Amrologo'
import MobileGoSocials from '../micros/MobileGoSocials'
// import Link from 'next/link'
import Copyright from '../micros/Copyright'
import Line from '../micros/Line'
import ContactMe from '../micros/ContactMe'
import FlexCenter from '../micros/FlexCenter'
import Heading from '../micros/typography/Heading'
import LinkPage from '../micros/LinkPage'
import { default as L } from 'next/link'

export default function MobileLandingViewHero() {
  return (
    <>
      <FlexCenter>
        <section className='shrink-0 space-y-3'>
          <Amrologo w={200} h={200} style='rounded-full' />
        </section>
      </FlexCenter>

      <section>
        <Line />
        <article className=' mt-5'>
          <h2 className='p-4 pt-5 text-4xl text-secondary opacity-50 text-right'>
            Nice to meet you!
          </h2>

          <p className='pl-5 pt-4 text-lg'>
            My name is{' '}
            <strong className='text-important opacity-80'>
              Amr Abdelkamel
            </strong>
            . I&apos;m passionate about web development.
          </p>

          <h3 className='p-4 pt-5 text-xl'>
            Currently I&apos;m seeking opportunities as an entry position web developer{' '}
            {/* <span className='text-important tracking-wide opacity-50 pl-2'>
              !important
            </span> */}
          </h3>

          <Heading size='text-2xl'>It starts with a connection!</Heading>
          <h3 className='pl-5 pt-10 text-3xl text-gray-500'>reach me out on:</h3>
        </article>
      </section>

      <FlexCenter>
        <MobileGoSocials />
      </FlexCenter>

      <Line />

      <section className='pt-5 space-y-14 '>

        <article>
          <h2 className='pl-2 text-4xl text-primary'>more about me?</h2>
          <LinkPage href='/about'>
            <a>
              <h2 className='pt-2 pl-4 text-2xl text-important underline hover:text-cool'>
                take me to about page
              </h2>
            </a>
          </LinkPage>
        </article>

        <article>
          <h2 className='pl-2 text-4xl text-primary'>reach me on</h2>
          <div className='pl-4 pt-2 space-y-2'>
            <ContactMe />
          </div>
        </article>

      </section>

      <Line />

      {/* <footer className=''>
        <Copyright />
      </footer> */}
    </>
  )
}
