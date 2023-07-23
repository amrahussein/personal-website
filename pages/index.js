import Head from 'next/head';
import { useRouter } from 'next/router';
import { useContext } from 'react';
import DesktopLandingViewHero from '../components/HeroLanding/DesktopLandingViewHero';
import MobileLandingViewHero from '../components/HeroLanding/MobileLandingViewHero';
import Layout from '../components/app-layout/TheLayout';
import { IsMobileContext } from '../context/Mobile.context';

export default function Home() {
  // const [canonicalURL, setCanonicalURL] = useState( typeof window === 'undefined' ?
  // '' :
  // `${window.location.origin}/${window.location.pathname}`)
  const { pathname } = useRouter();
  const siteName = 'https://amromoorie.com';
  const canonicalURL = siteName + pathname;

  const isMobile = useContext(IsMobileContext);

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
