'use client';

import Head from 'next/head';
import { usePathname } from 'next/navigation';
import useIsMobile from '../context/IsMobile.context';
import Layout from './_components/app-layout/TheLayout';
import DesktopLandingViewHero from './_components/HeroLanding/DesktopLandingViewHero';
import MobileLandingViewHero from './_components/HeroLanding/MobileLandingViewHero';

export default function Home() {
  // const [canonicalURL, setCanonicalURL] = useState( typeof window === 'undefined' ?
  // '' :
  // `${window.location.origin}/${window.location.pathname}`)

  const pathname = usePathname();

  const siteName = 'https://amrahussein.xyz';
  const canonicalURL = siteName + pathname;

  const { isMobile } = useIsMobile();

  return (
    <>
      <Head>
        <link rel='canonical' href={canonicalURL} />
      </Head>
      <Layout>
        {isMobile ? <MobileLandingViewHero /> : <DesktopLandingViewHero />}
      </Layout>
    </>
  );
}
