import Link from 'next/link';
import { navLinks } from '../../data/socials/nav.links';

export default function DesktopNav({ pathname }) {
  return (
    <nav>
      <div className='flex flex-row space-x-5 lg:space-x-12'>
        {navLinks.map((item) => (
          <Link aria-label={item.name} key={item.key} href={item.link}>
            <p
              className={`px-5 py-2 text-2xl text-secondary hover:cursor-pointer hover:rounded-lg hover:bg-accent ${
                pathname === item.link && 'rounded-lg bg-accent text-important'
              }`}
            >
              {item.name}
            </p>
          </Link>
        ))}
      </div>
    </nav>
  );
}
