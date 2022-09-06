import { useContext } from 'react'
import { AppContext } from './App.context'
import DesktopFooter from './desktop-landing-view/DesktopFooter'
import DesktopLandingNavBrand from './desktop-landing-view/DesktopLandingNavBrand'
import MobileFooter from './mobile-landing-view/MobileFooter'
import MobileLandingNavBrand from './mobile-landing-view/MobileLandingNavBrand'
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

          {children}

          <DesktopFooter />
        </>
      )}
    </div>
  )
}
