import { useState } from 'react';
import FlexCenter from '../micros/FlexCenter';
import ButtonCoolBlue from '../micros/buttons/ButtonCoolBlue';
import { tags, technologies } from './tech-stack-skills';

export default function SkillsVisualized() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {!open && (
        <FlexCenter>
          <ButtonCoolBlue setOpen={setOpen}>Visualize Skills</ButtonCoolBlue>
        </FlexCenter>
      )}

      {open && (
        <div className='duration-400 transition-all ease-out'>
          <ul className='grid list-disc items-center space-y-3 py-3 pl-8 sm:grid-cols-6 sm:space-y-0 sm:pl-10'>
            {Array.isArray(technologies) &&
              technologies.map((item, idx) => (
                <>
                  <li key={idx} className='pt-3 text-primary'>
                    <h2 className='text-secondary'>{item.tech}</h2>
                  </li>
                  <div className='relative top-[16.7%] block h-2 rounded-full bg-secondary opacity-60 sm:col-span-5'>
                    <span
                      className={`${item.width} absolute inset-0 rounded-full bg-primary `}
                      role='progressbar'
                      aria-valuenow={item.level}
                      aria-valuemin='0'
                      aria-valuemax='100'
                    ></span>
                  </div>
                </>
              ))}
          </ul>

          <ul className='space-x-2 space-y-2 pt-4'>
            {Array.isArray(tags) &&
              tags.map((tag, idx) => (
                <li
                  key={idx}
                  className='inline-block list-none rounded-full bg-accent px-4 py-1'
                >
                  {tag}
                </li>
              ))}
          </ul>
        </div>
      )}
    </>
  );
}
