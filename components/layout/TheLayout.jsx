import SidePaneNav from '../navigation/mobile-side-pane/SidePaneNav'
import MobileBottomNav from '../navigation/MobileBottomNav'
import Copyright from '../micros/Copyright'
import { useContext } from 'react'
import { AppContext } from '../App.context'
import DesktopLandingNavBrand from '../micros/desktop-view/DesktopLandingNavBrand'
import MobileLandingNavBrand from '../micros/mobile-view/MobileLandingNavBrand'
import DesktopFooter from '../micros/desktop-view/DesktopFooter'
import MobileFooter from '../micros/mobile-view/MobileFooter'

export default function Layout({ children }) {
  const mobile = useContext(AppContext)

  return (
    <main className='relative mx-2 mt-[1.5rem] py-[5rem] break-words text-gray-600'>
      {mobile ? (
        <>
          <MobileLandingNavBrand />
          <SidePaneNav />
          <MobileBottomNav mobile={mobile} />
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
