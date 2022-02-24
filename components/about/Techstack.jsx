import AppHeading from '../micros/typography/AppHeading'
import Link from '../micros/typography/AppLink'

export default function Techstack() {
  return (
    <div className='space-y-4'>
      <AppHeading>What about my tech stack specialization?</AppHeading>
      <p>
        {' '}
        I, deeply, focus on{' '}
        <em className='underline text-secondary'>
          <strong>JavaScript</strong>
        </em>{' '}
        with Frontend Libraries and Frameworks such as React, NextJS.
      </p>
      <h2 className='text-2xl text-secondary italic underline pt-2'>What am I currently into?</h2>
      <p>
        Building a <em className='underline text-secondary'>usable website</em>{' '}
        that addresses user needs <strong className='text-secondary'>UX</strong>{' '}
        lies at my core.
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
        In addition, I&apos;d like to dig deeper into micro-frameworks like
        <em className='text-secondary'>ExpressJS, FastAPI, and Flask</em> that
        can help me manage APIs. It gives me the flexibility to address{' '}
        <em className='text-secondary'>the philosophy of the modern web.</em>
      </p>

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
