import MobileLandingViewHero from '../components/HeroLanding/MobileLandingViewHero'
import DesktopLandingViewHero from '../components/HeroLanding/DesktopLandingViewHero'
import Layout from '../components/layout/TheLayout'
import { useContext } from 'react'
import { AppContext } from '../components/App.context'

export default function Home() {
  const mobile = useContext(AppContext)

  return (
    <Layout>
      {/* <LandingNavBrand /> */}
      {mobile ? <MobileLandingViewHero /> : <DesktopLandingViewHero />}
    </Layout>
  )
}
