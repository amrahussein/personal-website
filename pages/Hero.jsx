import { useState, useEffect } from 'react';
import Amrologo from '../components/micros/Amrologo';
import Socials from '../components/micros/Socials';
import LandingNav from '../components/navigation/Navigation';
import LandingNavBrand from '../components/navigation/LandingNavBrand';
import MobileNav from '../components/navigation/MobileLandingView';
import Navigation from '../components/navigation/Navigation';
import MobileLandingView from '../components/navigation/MobileLandingView';

export default function Hero() {
  const [mobile, setMobile] = useState(null);
  useEffect(() => {
    console.log('dangeorius isojfsoiuf');
    return window.innerWidth <= 768 ? setMobile(true) : setMobile(false);
  }, []);

  return (
    <>
        {mobile && mobile ? (
          <MobileLandingView />
        ) : (
          <>
            <div>DESKTOP</div>
          </>
        )}
        {/* <LandingNavBrand /> */}
          {/* <main className="mt-[20vh] flex justify-between items-center  text-gray-700 ">
        <section>
        <div className="shrink-0">
          <Amrologo w={200} h={200} style="rounded-full" />
        </div>
          <h2>Hey! Nice to meet you</h2>
          <p>
            My name is Amr Abdelkamel. I&apos;m passionate about web
            development.
          </p>

          <p>Let&apos;s get connected!</p>
        </section>
        <header>
          <Navigation />
        </header>
  </main> */}
      {/* <Socials  /> */}
    </>
  );
}
