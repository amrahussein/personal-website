import Heading from '../micros/typography/Heading'
import Link from '../micros/typography/Link'

export default function Techstack() {
  return (
    <>
      <Heading>What about my tech stack specialization?</Heading>
      <p>
        {' '}
        I, deeply, focus on JavaScript with Frontend Libraries and Frameworks
        such as React, NextJS.
      </p>
      <Heading>What am I currently into?</Heading>
      <p>
        Building a usable website that addresses user needs (UX) lies at my
        core.
      </p>
      <p>
        As the digital platforms expand, it&apos;s not practical to have various
        sources of truth; that&apos;s the user data. Using flux-like
        architecture in React apps comes to the rescue and addresses business
        needs.
      </p>
      <p>
        Although I know basic redux, I need to implement what I have learned
        into big projects.
      </p>
      <p>
        In addition, I&apos;d like to dig deeper into micro-frameworks like
        ExpressJS, FastAPI, and Flask that can help me manage APIs. It gives me
        the flexibility to address the philosophy of the modern web.
      </p>

      <Heading size='lg'>
        You can check my latest projects at my
      </Heading>
        <Link href='https://github.com/amromoorie' rel='github' styles=''>
          GitHub account.
        </Link>
      <Link
        href='https://github.com/amromoorie?tab=repositories'
        rel='github-repositories' styles={'block'}
      >
        take me to Github repo
      </Link>
    </>
  )
}
