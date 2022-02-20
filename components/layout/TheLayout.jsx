import { useEffect, useState } from "react";
import MobileLandingViewHero from "../HeroLanding/MobileLandingViewHero";
import DesktopLandingViewHero from "../HeroLanding/DesktopLandingViewHero";
import LandingNavBrand from "../micros/LandingNavBrand";
import SidePaneNav from "../navigation/mobile-side-pane/SidePaneNav";
import MobileBottomNav from "../navigation/MobileBottomNav";
import Copyright from "../micros/Copyright";

export default function Layout({ children }) {

  // console.log('hero mounted!')

  const [width, setWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : undefined)
  const [mobile, setMobile] = useState(false)

  useEffect(() => {
    // matching tailwind breakpoint of md screens
    const breakpoint = 768
    window.addEventListener('resize', () => setWidth(window.innerWidth))
    console.log('window.innerWidth: ', window.innerWidth)
    width <= breakpoint ? setMobile(true) : setMobile(false)
    return () => window.addEventListener('resize', () => setWidth(window.innerWidth))
  }, [width])

  return (
    
 
    <main className="mx-2 mt-[1.5rem] py-[5rem] break-words text-gray-600">
       <header> 
       <LandingNavBrand />
       {mobile ?
       
       <>
        <SidePaneNav />
        <MobileBottomNav mobile={mobile} />
        <footer className="fixed bottom-0 text-gray-600">

        <Copyright />
        </footer>
       </>
       
       : <DesktopLandingViewHero />}
       </header>
      {children}
    </main>
    
  );
}

