import { aboutLandingInfo } from "../../../data/hero-landing/about-landing.data";

export default function HeroMessage() {
  return (
    <p className='pt-4 text-lg'>
      Hey, my name is{' '}
      <strong className='text-secondary opacity-80 dark:text-slate-300'>
        Amr Abdelkamel Hussein
      </strong>
      <br></br>.. and {aboutLandingInfo.selfIntro}
    </p>
  );
}
