import Link from 'next/link'
import { useRouter } from 'next/router'
import { links } from './Nav.links'

export default function DesktopTopNav() {
  const { pathname } = useRouter()

  return (
    <nav>
      <ul className=' flex flex-row space-x-5 lg:space-x-12'>
        {links.map((item) => (
          <Link key={item.key} href={item.link} passHref>
            <li
              className={`hover:cursor-pointer px-5 py-2 hover:bg-accent hover:rounded-lg text-secondary text-2xl ${
                pathname === item.link
                  ? 'bg-accent rounded-lg text-important '
                  : ''
              }`}
            >
              <a aria-label={item.name}>{item.name}</a>
            </li>
          </Link>
        ))}
      </ul>
    </nav>
  )
}
