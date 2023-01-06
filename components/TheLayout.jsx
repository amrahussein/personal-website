import { useContext, useEffect, useState } from 'react';
import { AppContext } from './App.context';
import DesktopFooter from './desktop-landing-view/DesktopFooter';
import DesktopLandingNavBrand from './desktop-landing-view/DesktopLandingNavBrand';
import LoadingSpinner from './micros/LoadingSpinner';
import MobileFooter from './mobile-landing-view/MobileFooter';
import MobileLandingNavBrand from './mobile-landing-view/MobileLandingNavBrand';
import MobileBottomNav from './navigation/MobileBottomNav';
import SidePaneNav from './navigation/mobile-side-pane/SidePaneNav';

export default function Layout({ children }) {
  const mobile = useContext(AppContext);

  const [loading, setLoading] = useState(true);

  // load only when device inner width is specified
  useEffect(() => {
    if (mobile !== null) {
      setLoading(false);
    }
  }, [mobile]);

  // load the correct website layout
  const handleFirstPaint = () => {
    if (mobile) {
      return (
        <>
          <MobileLandingNavBrand />
          <SidePaneNav />
          <MobileBottomNav />

          {children}

          <MobileFooter />
        </>
      );
    } 
      return (
        <>
          <DesktopLandingNavBrand />

          {/* set container width to desktop screens */}
          <div className='sm:max-w-4xl'>{children}</div>

          <DesktopFooter />
        </>
      );
    
  };

  return (
    <div className='bg-white px-2 mx-2 relative mt-[1.5rem] py-[5rem] break-words text-gray-600 selection:bg-primary selection:text-accent ... sm:mx-4 lg:grid lg:place-items-center'>
      {!loading ? handleFirstPaint() : <LoadingSpinner />}
    </div>
  );
}
