import { Fragment } from 'react';
import FlexCenter from '../micros/FlexCenter';
import ButtonCoolBlue from '../micros/buttons/ButtonCoolBlue';
import { tags, technologies } from '../../data/about/tech-stack-skills';

export default function SkillsVisualized({ open, setOpen }) {
  return (
    <>
      {!open && (
        <FlexCenter>
          <ButtonCoolBlue setOpen={setOpen}>Visualize Skills</ButtonCoolBlue>
        </FlexCenter>
      )}

      <div
        className={` ${
          !open && 'opacity-0'
        } transition-opacity duration-200 ease-out`}
      >
        {open && (
          <div>
            <ul className='sm:pl-auto grid list-disc items-center pl-4 sm:grid-cols-6 sm:pl-10'>
              {technologies?.map((item, idx) => (
                <Fragment key={idx}>
                  <li className='mt-4 text-primary'>
                    <h2 className='font-mono font-semibold text-gray-700'>
                      {item.tech}
                    </h2>
                  </li>
                  <div className='relative top-[16.7%] block h-3 rounded-full border-2 bg-secondary opacity-70 sm:col-span-5'>
                    <span
                      className={`w-[${item.level}%] absolute inset-0 rounded-full bg-primary`}
                      role='progressbar'
                      aria-valuenow={item.level}
                      aria-valuemin='0'
                      aria-valuemax='100'
                    ></span>
                  </div>
                </Fragment>
              ))}
            </ul>

            <ul className='mt-8 space-x-2 space-y-2'>
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
      </div>
    </>
  );
}
