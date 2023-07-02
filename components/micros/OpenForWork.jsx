import { aboutLandingInfo } from '../../data/hero-landing/about-landing.data';

export default function OpenForWork() {
  return (
    <>
      <h2 className='pt-8 text-2xl text-gray-700'>
        <div className='flex'>
          <span className='inline-bflock mx-2 h-4 w-4 animate-pulse rounded-full bg-green-500' />
          <span>Open For Work</span>
        </div>
      </h2>
      <h4 className='py-2 text-sm italic sm:text-lg'>
        Ready to work & collaborate with one of the following roles/job
        profiles:
      </h4>

      <ul className='pl-4'>
        {aboutLandingInfo?.jobProfiles.map((li, idx) => (
          <li className='list-disc pr-10' key={idx}>
            {li}
          </li>
        ))}
      </ul>
    </>
  );
}
