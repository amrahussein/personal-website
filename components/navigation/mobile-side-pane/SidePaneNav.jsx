import { useEffect, useState } from 'react';
import MobileTopBar from '../../app-layout/MobileTopBar';
import Copyright from '../../micros/Copyright';
import GoSocials from '../../micros/GoSocials';
import Line from '../../micros/Line';
import ToggleMenu from '../../micros/ToggleMenu';
import SidePaneNavItems from './SidePaneNavItems';

export default function SidePaneNav() {
  const [paneOpened, setPaneOpened] = useState(false);

  // stop scroll behavior while sidepane is open
  useEffect(() => {
    document.body.style.overflow = paneOpened ? 'hidden' : 'auto';
  }, [paneOpened]);

  return (
    <>
      <div
        className={`fixed top-0 right-0 z-100 h-full w-full bg-secondary duration-200 ease-out dark:bg-primaryDark ${
          paneOpened ? 'translate-x-0' : 'translate-x-full'
        } `}
      >
        <MobileTopBar paneOpened={true} />
        <SidePaneNavItems />
        <Line color='border-accent' mt='10' />
        <section className='flex justify-center'>
          <GoSocials
            styleSocialItems='flex space-x-8 pt-7'
            socialNames={false}
            linkStyle='w-8 h-8 rounded-lg hover:scale-110 p-1 bg-accent dark:bg-primaryDark'
          />
        </section>

        <section className='absolute bottom-1 left-1 text-accent'>
          <Copyright />
        </section>
      </div>
      {!paneOpened ? (
        <button
          onClick={() => setPaneOpened(!paneOpened)}
          className='fixed top-0 right-0 z-10 mr-4 mt-[1.21rem]'
          aria-label='open navigational menu'
        >
          <ToggleMenu />
        </button>
      ) : (
        <button
          className='close fixed top-0 right-0 z-100 mr-4 mt-4 text-accent'
          onClick={() => setPaneOpened(!paneOpened)}
          aria-label='close navigational menu'
        >
          <aside className='underline-offset-3 inline align-top text-lg font-semibold underline hover:text-important'>
            Close
          </aside>{' '}
          {/* <span className='text-2xl font-thin'>X</span> */}
        </button>
      )}
    </>
  );
}
