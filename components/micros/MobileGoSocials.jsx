import Link from 'next/link'
import { socials } from './Social.links'

export default function MobileGoSocials({
  styles,
  linkStyle,
  socialNames = true,
}) {
  return (
    <section className='mt-10 grid grid-cols-2 gap-7'>
      {socials.map((item) => (
        <Link key={item.name} href={item.link}>
          <a
            rel='noopener noreferrer'
            target='_blank'
            className='2xl pt-1 text-center font-semibold opacity-75 tracking-wider text-important'
          >
            <div className='p-2 flex flex-col w-24 h-24 space-y-4 rounded-3xl bg-accent hover:border-2 hover:border-secondary'>
              {item.icon}
              {socialNames && <p className='text-sm'>{item.name}</p>}
            </div>
          </a>
        </Link>
      ))}
    </section>
  )
}
