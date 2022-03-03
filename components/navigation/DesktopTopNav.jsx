import Link from 'next/link'
import { useRouter } from 'next/router'
import { links } from './Nav.links'

export default function DesktopTopNav() {
  const { pathname } = useRouter()

  return (
    <nav className=' text-important text-2xl'>
      <ul className=' flex flex-row space-x-5 lg:space-x-12'>
        {links.map((item) => (
          <li
            key={item.key}
            className={`hover:cursor-pointer px-5 py-2 hover:bg-accent hover:rounded-lg ${
              pathname === item.link ? 'bg-accent rounded-lg ' : ''
            }`}
          >
            <Link href={item.link}>
              <a aria-label={item.name}>{item.name}</a>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}
