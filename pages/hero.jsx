// import { useState, useEffect } from 'react'
// import MobileLandingView from '../components/HeroLanding/MobileLandingView'
// import DesktopLandingView from '../components/HeroLanding/DesktopLandingView'

// export default function Hero() {

//   console.log('hero mounted!')

//   const [width, setWidth] = useState(
//     typeof window !== 'undefined' ? window.innerWidth : undefined
//   )
//   const [mobile, setMobile] = useState(false)

//   useEffect(() => {
//     // matching tailwind breakpoint of md screens
//     const breakpoint = 768
//     window.addEventListener('resize', () => setWidth(window.innerWidth))
//     console.log('window.innerWidth: ', window.innerWidth)
//     width <= breakpoint ? setMobile(true) : setMobile(false)
//     return () =>
//       window.addEventListener('resize', () => setWidth(window.innerWidth))
//   }, [width])

//   return (
//     <>
//       {mobile ? <MobileLandingView mobile={mobile} /> : <DesktopLandingView />}
//     </>
//   )
// }
