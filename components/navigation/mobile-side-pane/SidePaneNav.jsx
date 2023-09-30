import { useEffect, useState } from 'react';
import useShouldDisplayBottomNavMode from '../../../context/ShouldDisplayBottomNav.context';
import MobileTopBar from '../../app-layout/MobileTopBar';
import BottomNavSwitch from '../../micros/BottomNavSwitch';
import Copyright from '../../micros/Copyright';
import GoSocials from '../../micros/GoSocials';
import Line from '../../micros/Line';
import ToggleMenu from '../../micros/ToggleMenu';
import ToggleDarkMode from '../../micros/buttons/ToggleDarkMode';
import SidePaneNavItems from './SidePaneNavItems';

export default function SidePaneNav() {
  const [paneOpened, setPaneOpened] = useState(false);
  const { shouldDisplayBottomNav, handleShouldDisplayBottomNav } =
    useShouldDisplayBottomNavMode();

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

        <div className='flex flex-col justify-between'>
          <SidePaneNavItems
            paneOpened={paneOpened}
            setPaneOpened={setPaneOpened}
          />
          <div className='mr-14 mt-10 place-self-center text-gray-50 dark:text-slate-50'>
            <ToggleDarkMode />
          </div>
        </div>

        <Line color='border-accent' mt='8' />
        <div className='flex justify-center'>
          <GoSocials
            styleSocialItems='flex space-x-8 pt-7'
            socialNames={false}
            linkStyle='w-8 h-8 rounded-lg hover:scale-110 p-1 bg-accent dark:bg-primaryDark'
          />
        </div>

        {/* Bottom Nav Switch */}
        <div className='flex items-start pt-14 text-gray-200'>
          <span className='px-4 font-semibold'>Bottom Nav:</span>
          <span className='pt-[.2rem]'>
            <BottomNavSwitch
              checked={shouldDisplayBottomNav}
              onChange={handleShouldDisplayBottomNav}
            />
          </span>
        </div>
        <div className='absolute bottom-1 left-1 text-accent'>
          <Copyright />
        </div>
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
