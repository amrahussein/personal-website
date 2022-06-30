import Link from 'next/link'
import Amrologo from '../micros/Amrologo'
import ContactMe from '../micros/ContactMe'
import FlexCenter from '../micros/FlexCenter'
import GoSocials from '../micros/GoSocials'
import HeroMessage from '../micros/HeroMessage'
import Line from '../micros/Line'
import AppHeading from '../micros/typography/AppHeading'

export default function MobileLandingViewHero() {
  return (
    <main>
      <FlexCenter>
        <section className='shrink-0 space-y-3'>
          <Amrologo w={150} h={150} />
        </section>
      </FlexCenter>

      <section>
        <Line />
        <article className=' mt-5'>
          <aside className='italic py-5 pr-1 text-4xl text-secondary opacity-70 text-right'>
            Nice to meet you!
          </aside>

          <HeroMessage />
          
        </article>

        <article>
          <h2 className='pl-2 pt-7 text-3xl text-primary'>more about me?</h2>
          <Link href='/about'>
            <a>
              <h2 className='font-mono italic pt-2 pl-4 text-2xl text-important opacity-70 underline hover:text-cool'>
                take me to about page
              </h2>
            </a>
          </Link>
        </article>

        <article className='pt-7'>
          <AppHeading styles='text-[1.4rem] sm:text-3xl'>
            It starts with a connection!
          </AppHeading>
          <h3 className='font-mono pl-5 pt-2 text-3xl italic text-gray-500'>
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
  )
}
