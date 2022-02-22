import SidePaneNav from '../navigation/mobile-side-pane/SidePaneNav'
import MobileBottomNav from '../navigation/MobileBottomNav'
import { useContext } from 'react'
import { AppContext } from '../App.context'
import DesktopLandingNavBrand from '../micros/desktop-view/DesktopLandingNavBrand'
import MobileLandingNavBrand from '../micros/mobile-view/MobileLandingNavBrand'
import DesktopFooter from '../micros/desktop-view/DesktopFooter'
import MobileFooter from '../micros/mobile-view/MobileFooter'

export default function Layout({ children }) {
  const mobile = useContext(AppContext)

  return (
    <main className='sm:mx-4 lg:mx-8 mx-2 relative mt-[1.5rem] py-[5rem] break-words text-gray-600'>
      {mobile ? (
        <>
          <MobileLandingNavBrand />
          <SidePaneNav />
          <MobileBottomNav />
         <MobileFooter />
        </>
      ) : (
        <>

          <DesktopLandingNavBrand />
          <DesktopFooter />
        </>
      )}
      {children}
    </main>
  )
}
