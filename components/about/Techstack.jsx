import { useState } from 'react'
import ButtonCoolBlue from '../micros/buttons/ButtonCoolBlue'
import AppHeading from '../micros/typography/AppHeading'
import Link from '../micros/typography/AppLink'

export default function Techstack() {
  const [toggleBtn, setToggleBtn] = useState(false)
  const technologies = [
    {
      tech: 'HTML5',
      level: 'w-[86%]',
    },
    {
      tech: 'CSS3',
      level: 'w-[96%]',
    },
    {
      tech: 'Tailwindcss',
      level: 'w-[95%]',
    },
    {
      tech: 'Mui',
      level: 'w-[77%]',
    },
    {
      tech: 'JavaScript',
      level: 'w-[95%]',
    },
    {
      tech: 'React',
      level: 'w-[93%]',
    },
    {
      tech: 'Redux',
      level: 'w-[92%]',
    },
    {
      tech: 'NextJS',
      level: 'w-[90%]',
    },
  ]

  const tags = [
    'Responsive design',
    'User Experience (UX)',
    'ReactNative',
    'Webpack (Vite)',
    'Version Control (Git)',
    'Linux',
    'Docker',
    'ExpressJs',
    'MERN',
    'Strapi',
    'JAM stack',
  ]

  return (
    <div className='space-y-4'>
      <AppHeading>My tech stack specialization?</AppHeading>
      <p>
        {' '}
        Generally, I deeply focus on{' '}
        <em className='underline text-secondary'>
          <strong>JavaScript</strong>
        </em>{' '}
        and React library with its ecosystem as of now.
      </p>

      {!toggleBtn && (
        <div className='flex justify-center'>
          <ButtonCoolBlue toggleBtn={toggleBtn} setToggleBtn={setToggleBtn}>
            visualize skills
          </ButtonCoolBlue>
        </div>
      )}
      {toggleBtn && (
        <div className='transition-all ease-out duration-400'>
          <ul className='pl-8 list-disc py-3 grid items-center space-y-3 ... sm:pl-10 sm:grid-cols-6 sm:space-y-0'>
            {Array.isArray(technologies) &&
              technologies.map((item, idx) => (
                <>
                  <li key={idx} className='text-primary pt-3'>
                    <h2 className='text-secondary'>{item.tech}</h2>
                  </li>
                  <div className='top-[16.7%] block h-2 bg-secondary opacity-60 rounded-full relative ... sm:col-span-5'>
                    <span
                      className={`${item.level} bg-primary rounded-full absolute inset-0`}
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
                  className='rounded-full list-none bg-accent inline-block px-4 py-1'
                >
                  {tag}
                </li>
              ))}
          </ul>
        </div>
      )}

      {/* <h2 className='text-2xl text-secondary italic underline pt-2'>
        What am I currently into?
      </h2>
      <p>
        Building a <em className='underline text-secondary'>usable website</em>{' '}
        that addresses user needs.{' '}
        <strong className='text-secondary'>UX</strong> lies at my core.
      </p>
      <p>
        As the digital platforms expand, it&apos;s not practical to have various
        <em>sources of truth;</em> that&apos;s the{' '}
        <em className='underline'>user data.</em> Using flux-like architecture
        in React apps comes to the rescue and addresses business needs.
      </p>
      <p>
        Although I know basic redux, I need to implement what I have learned
        into big projects.
      </p>
      <p>
        In addition, I&apos;d like to dig deeper into micro-frameworks like{' '}
        <em className='text-secondary'>ExpressJS, FastAPI, and Flask</em> that
        can help me manage APIs. It gives me the flexibility to address{' '}
        <em className='text-secondary'>the philosophy of the modern web.</em>
      </p> */}

      <p className='text-secondary pt-4'>
        <em>
          You can check my latest projects at my{' '}
          <Link href='https://github.com/amromoorie' rel='github' styles=''>
            GitHub account
          </Link>
        </em>
      </p>
      {/* <Link
        href='https://github.com/amromoorie?tab=repositories'
        rel='github-repositories' styles={'block'}
      >
        take me to Github repo
      </Link> */}
    </div>
  )
}
