import { useContext } from 'react'
import { AppContext } from './App.context'
import DesktopFooter from './micros/desktop-landing-view/DesktopFooter'
import DesktopLandingNavBrand from './micros/desktop-landing-view/DesktopLandingNavBrand'
import MobileFooter from './micros/mobile-landing-view/MobileFooter'
import MobileLandingNavBrand from './micros/mobile-landing-view/MobileLandingNavBrand'
import SidePaneNav from './navigation/mobile-side-pane/SidePaneNav'
import MobileBottomNav from './navigation/MobileBottomNav'

export default function Layout({ children }) {
  const mobile = useContext(AppContext)

  return (
    <div className='bg-white px-2 mx-2 relative mt-[1.5rem] py-[5rem] break-words text-gray-600 selection:bg-primary selection:text-accent ... sm:mx-4 lg:grid lg:place-items-center'>
      {mobile ? (
        <>
          <MobileLandingNavBrand />
          <SidePaneNav />
          <MobileBottomNav />

          {children}

          <MobileFooter />
        </>
      ) : (
        <>
          <DesktopLandingNavBrand />
          
          <div className='sm:max-w-4xl'>
          {children}
          </div>

          <DesktopFooter />
        </>
      )}
    </div>
  )
}
