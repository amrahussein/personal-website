import { technicalSkills } from '../../data/technical-skills/technical-skills';

export default function TechnicalSkills() {
  return (
    <>
      <h2 className='text-2xl font-bold italic underline'>Technical Skills</h2>

      <h3 className='mt-8 inline-block rounded-full border-2 border-primary px-4 py-1 font-bold text-gray-700'>
        Frontend Skills
      </h3>

      <ul className='flex flex-wrap pt-2 pl-5'>
        {technicalSkills?.frontend.map((li, idx) => (
          <li className='list-disc pr-10' key={idx}>
            {li}
          </li>
        ))}
      </ul>

      <h3 className='mt-8 inline-block rounded-full border-2 border-primary px-4 py-1 font-bold text-gray-700'>
        Backend Skills
      </h3>
      <ul className='flex flex-wrap pt-2 pl-5'>
        {technicalSkills?.backend.map((li, idx) => (
          <li className='list-disc pr-10' key={idx}>
            {li}
          </li>
        ))}
      </ul>

      <h3 className='mt-8 inline-block rounded-full border-2 border-primary px-4 py-1 font-bold text-gray-700'>
        Software Engineering
      </h3>
      <ul className='flex flex-wrap pt-2 pl-5'>
        {technicalSkills?.softwareEnigeering.map((li, idx) => (
          <li className='list-disc pr-10' key={idx}>
            {li}
          </li>
        ))}
      </ul>

      <h3 className='mt-8 inline-block rounded-full border-2 border-primary px-4 py-1 font-bold text-gray-700'>
        Related Skills
      </h3>
      <h4 className='pt-2 font-mono'>Have great knowledge of the following:</h4>
      <ul className='flex flex-wrap pt-2 pl-5'>
        {technicalSkills?.general.map((li, idx) => (
          <li className='list-disc pr-10' key={idx}>
            {li}
          </li>
        ))}
      </ul>

      <h3 className='mt-8 inline-block rounded-full border-2 border-primary px-4 py-1 font-bold text-gray-700'>
        Programming Langauges
      </h3>
      <ul className='flex flex-wrap pt-2 pl-5'>
        {technicalSkills?.programmingLanguages.map((li, idx) => (
          <li className='list-disc pr-10' key={idx}>
            {li}
          </li>
        ))}
      </ul>
    </>
  );
}
