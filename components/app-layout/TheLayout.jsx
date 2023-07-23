import { useContext, useEffect, useState } from 'react';
import { IsMobileContext } from '../../context/Mobile.context';
import { useUserScrolledDown } from '../../hooks/useUserScrolledDown';
import LoadingSpinner from '../micros/LoadingSpinner';
import TakeMeToTop from '../micros/buttons/TakeMeToTop';
import MobileBottomNav from '../navigation/MobileBottomNav';
import SidePaneNav from '../navigation/mobile-side-pane/SidePaneNav';
import DesktopFooter from './DesktopFooter';
import DesktopTopNavBar from './DesktopTopNavBar';
import MobileFooter from './MobileFooter';
import MobileTopBar from './MobileTopBar';

export default function Layout({ children }) {
  const isMobile = useContext(IsMobileContext);

  const [loading, setLoading] = useState(true);

  // load only when device inner width is specified
  useEffect(() => {
    if (isMobile !== null) {
      setLoading(false);
    }
  }, [isMobile]);

  const { userScrollDown } = useUserScrolledDown();

  // if not loading handle first render, else show spinner
  return !loading ? (
    <div className='relative mx-2 mt-[1.5rem] break-words px-2 py-[5rem] text-gray-600 selection:bg-primary selection:text-accent dark:text-slate-400 sm:mx-4 lg:grid lg:place-items-center'>
      {/* render the correct website layout according to device width */}
      {isMobile ? (
        <>
          <MobileTopBar />
          <SidePaneNav />
          <MobileBottomNav />

          {children}

          {/* show take me to top button when user scrolls down - mobile view */}
          {userScrollDown && <TakeMeToTop />}

          <MobileFooter />
        </>
      ) : (
        <>
          <DesktopTopNavBar />

          {/* set container width styles to non-mobile screens */}
          <div className='sm:max-w-4xl'>{children}</div>

          <DesktopFooter />
        </>
      )}
    </div>
  ) : (
    <LoadingSpinner />
  );
}
