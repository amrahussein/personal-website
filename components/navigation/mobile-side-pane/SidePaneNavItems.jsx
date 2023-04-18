import Link from 'next/link';
import { useRouter } from 'next/router';
import { navLinks } from '../../../data/socials/nav.links';

export default function SidePaneNavItems() {
  const router = useRouter();
  return (
    <>
      <nav className='flex flex-col items-center pt-[10rem] text-2xl text-accent'>
        <ul className='space-y-10'>
          {navLinks.map((item) => (
            <li
              key={item.key}
              className={`underline-offset-3 hover:underline ${
                router.pathname === item.link &&
                'underline-offset-3 underline decoration-cool'
              }`}
            >
              <Link href={item.link}>
                <a aria-label={item.name}>{item.name}</a>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}
