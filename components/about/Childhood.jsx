import AppHeading from '../micros/typography/AppHeading'
import AppLink from '../micros/typography/AppLink'

export default function Childhood() {
  return (
    <div className='space-y-4'>
      <AppHeading>In my old days...</AppHeading>
      <p>
        Looking back into my old days, I was curious about learning languages,
        knowing people online, playing games esp soccer games.
      </p>
      <p>
        Technology, for sure, has been a great part of my life since childhood.{' '}
        <aside>
          I remember <AppLink href='https://fb.com/amr.tiger.96780/' styles='opacity-50'>
          my first email
          </AppLink> was around 2007, and my first FB was around
          2009 before my main one {' '}
          <AppLink href='https://fb.com/amromoorie/' rel='facebook'>
            fb.com/amromoorie
          </AppLink>.{' '}
          It&apos;s a great idea to get connected!
        </aside>
      </p>
      <p>
        One of the things about myself, that came obvious to me early on, was
        that <em className='underline text-secondary'>I liked to explore the world, in addition to, learning from
        different people.</em>
      </p>
      <p>
        The internet, to me, was a chance to learn a lot about the world. I was
        not sure about my exact dream job, but I had an idea of what direction
        could suit my personality. A type of direction that involves languages,
        science, research, or Technology.
      </p>
      <p>
        <em>What I came to realize was that everyone had a different learning style
        with a different mindset that affects the way one sees the world.</em> <strong>I
        think the world of DEV embraces that where I want to grow and
        contribute.</strong>
      </p>
    </div>
  )
}
