import { useContext, useEffect, useState } from 'react';
import { AppContext } from '../App.context';
import DesktopFooter from './DesktopFooter';
import DesktopNavBrand from './DesktopNavBrand';
import MobileFooter from './MobileFooter';
import MobileNavBrand from './MobileNavBrand';
import LoadingSpinner from '../micros/LoadingSpinner';
import SidePaneNav from '../navigation/mobile-side-pane/SidePaneNav';
import MobileBottomNav from '../navigation/MobileBottomNav';

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
          <MobileNavBrand />
          <SidePaneNav />
          <MobileBottomNav />

          {children}

          <MobileFooter />
        </>
      );
    }
    return (
      <>
        <DesktopNavBrand />

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
