import { aboutLandingInfo } from '../../../data/hero-landing/about-landing.data';

export default function AboutLandingInfo() {
  return (
    <>
      <ul className='list-disc space-y-3 py-2'>
        {AboutLandingInfo.selfIntro?.map((li, idx) => (
          <li key={idx}>{li}</li>
        ))}
      </ul>

      <h2 className='pt-4 font-bold text-gray-500'>
        Things that inspire me as a web developer:
      </h2>

      <ul className='list-disc space-y-3 py-2'>
        {aboutLandingInfo.inspiringThings?.map((li, idx) => (
          <li key={idx}>{li}</li>
        ))}
      </ul>
    </>
  );
}
