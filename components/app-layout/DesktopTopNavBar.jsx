import Link from 'next/link';
import { useRouter } from 'next/router';
import { navLinks } from '../../data/socials/nav.links';
import DesktopNavBrand from '../navigation/DesktopNavBrand';

export default function DesktopTopNavBar() {
  const { pathname } = useRouter();

  return (
    <header
      className='fixed inset-x-0 top-0 z-10 flex flex-row justify-between border-[0.13rem] border-b-accent bg-white pt-2 pb-1 pr-4 pl-2 text-gray-600
      dark:border-t-primaryDark dark:border-l-primaryDark dark:border-r-primaryDark dark:border-b-slate-600 dark:bg-primaryDark sm:px-4 lg:px-8'
    >
      <DesktopNavBrand />
      <nav>
        <div className='flex flex-row space-x-5 lg:space-x-12'>
          {navLinks.map((item) => (
            <Link key={item.key} href={item.link} passHref>
              <a aria-label={item.name}>
                <p
                  className={`px-5 py-2 text-2xl text-secondary hover:cursor-pointer hover:rounded-lg hover:bg-accent dark:text-slate-100 dark:hover:bg-primary ${
                    pathname === item.link &&
                    'rounded-lg bg-accent text-important dark:bg-primary dark:text-slate-100'
                  }`}
                >
                  {item.name}
                </p>
              </a>
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}
