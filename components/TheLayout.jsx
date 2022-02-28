import SidePaneNav from './navigation/mobile-side-pane/SidePaneNav'
import MobileBottomNav from './navigation/MobileBottomNav'
import { useContext } from 'react'
import { AppContext } from './App.context'
import DesktopLandingNavBrand from './micros/desktop-landing-view/DesktopLandingNavBrand'
import MobileLandingNavBrand from './micros/mobile-landing-view/MobileLandingNavBrand'
import DesktopFooter from './micros/desktop-landing-view/DesktopFooter'
import MobileFooter from './micros/mobile-landing-view/MobileFooter'

export default function Layout({ children }) {
  const mobile = useContext(AppContext)

  return (
    <div className='px-2 mx-2 relative mt-[1.5rem] py-[5rem] break-words text-gray-600 ... sm:mx-4 lg:mx-8 lg:ml-16'>
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
          {children}
          <DesktopFooter />
        </>
      )}
    </div>
  )
}
