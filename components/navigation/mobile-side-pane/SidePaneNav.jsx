import { useState } from 'react'
import Copyright from '../../micros/Copyright'
import GoSocials from '../../micros/GoSocials'
import Line from '../../micros/Line'
import MobileLandingNavBrand from '../../micros/mobile-view/MobileLandingNavBrand'
import ToggleMenu from '../../micros/ToggleMenu'
import SidePaneNavItems from './SidePaneNavItems'

export default function SidePaneNav() {
  const [paneOpened, setPaneOpened] = useState(false)

  return (
    <>
      <div
        className={`z-100 top-0 right-0 fixed bg-secondary w-full h-full ease-out duration-200 ${
          paneOpened ? 'translate-x-0' : 'translate-x-full'
        } `}
      >
        <MobileLandingNavBrand dark={true} />
        <SidePaneNavItems />
        <Line color='border-accent' mt='10' />
        <section className='flex justify-center'>
          <GoSocials
            styleSocialItems='flex space-x-8 pt-7'
            socialNames={false}
            linkStyle='w-8 h-8 rounded-lg hover:scale-110 p-1 bg-accent'
          />
        </section>

        <section className='absolute bottom-1 left-1 text-accent'>
          <Copyright />
        </section>
      </div>
      {!paneOpened ? (
        <button
          onClick={() => setPaneOpened(!paneOpened)}
          className='fixed z-10 top-0 right-0 mr-4 mt-4'
        >
          <ToggleMenu />
        </button>
      ) : (
        <button
          className='z-100 close text-accent fixed top-0 right-0 mr-4 mt-4'
          onClick={() => setPaneOpened(!paneOpened)}
        >
          <aside className='font-semibold inline align-top text-lg underline underline-offset-3 hover:text-important'>
            Close
          </aside>{' '}
          {/* <span className='text-2xl font-thin'>X</span> */}
        </button>
      )}
    </>
  )
}
