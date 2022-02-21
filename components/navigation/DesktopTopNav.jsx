import Link from "next/link";
import { useRouter } from "next/router";
import { links } from "./Nav.links";

export default function DesktopTopNav() {
  const router = useRouter()
  return (
    <nav className=" text-important text-2xl">
 
        <ul className=' flex flex-row space-x-5 lg:space-x-12'>
          {links.map((item) => (
              <li key={item.key} className={`px-4 py-2 hover:underline ${router.pathname === item.link ? 'bg-accent px-4 py-2 rounded-lg' : ''}`}>
                <Link href={item.link}>
                  <a>{item.name}</a>
                </Link>
              </li>
          ))}
        </ul>
      </nav>
  )
}
