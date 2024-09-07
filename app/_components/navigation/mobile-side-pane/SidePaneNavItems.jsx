import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { navLinks } from '../../../../data/socials/nav.links';

export default function SidePaneNavItems({ paneOpened, setPaneOpened }) {
  const router = useRouter();

  return (
    <nav className='flex flex-col items-center pt-24 text-2xl text-accent'>
      <ul className='space-y-6'>
        {navLinks.map((item) => (
          <li
            key={item.id}
            className={`underline-offset-3 hover:underline ${
              router.pathname === item.link &&
              'underline-offset-3 underline decoration-cool'
            }`}
            onClick={() => {
              if (paneOpened && router.pathname === item.link) {
                setPaneOpened(false);
              }
            }}
          >
            <Link
              href={item.link}
              aria-label={item.name}
              onClick={() => setPaneOpened(!paneOpened)}
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
