import { useContext, useEffect, useState } from 'react';
import { AppContext } from '../App.context';
import LoadingSpinner from '../micros/LoadingSpinner';
import MobileBottomNav from '../navigation/MobileBottomNav';
import SidePaneNav from '../navigation/mobile-side-pane/SidePaneNav';
import DesktopFooter from './DesktopFooter';
import DesktopNavBrand from './DesktopNavBrand';
import MobileFooter from './MobileFooter';
import MobileNavBrand from './MobileNavBrand';

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
    <div className='relative mx-2 mt-[1.5rem] break-words bg-white px-2 py-[5rem] text-gray-600 selection:bg-primary selection:text-accent sm:mx-4 lg:grid lg:place-items-center'>
      {!loading ? handleFirstPaint() : <LoadingSpinner />}
    </div>
  );
}
