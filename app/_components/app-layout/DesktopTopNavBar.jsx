import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { navLinks } from '../../../data/socials/nav.links';
import ToggleDarkMode from '../micros/buttons/ToggleDarkMode';
import DesktopNavBrand from '../navigation/DesktopNavBrand';

export default function DesktopTopNavBar() {
  const { pathname } = useRouter();

  return (
    <header
      className='fixed inset-x-0 top-0 z-10 flex flex-row justify-between border-[0.13rem] border-b-accent bg-white pt-2 pb-1 pr-4 pl-2 text-gray-600
      dark:border-t-primaryDark dark:border-l-primaryDark dark:border-r-primaryDark dark:border-b-slate-600 dark:bg-primaryDark sm:px-4 lg:px-8'
    >
      <DesktopNavBrand />

      <div className='flex items-center'>
        <nav>
          <div className='flex flex-row space-x-5 lg:space-x-12'>
            {navLinks.map((item) => (
              <Link key={item.key} href={item.link} aria-label={item.name}>
                <p
                  className={`px-5 py-2 text-2xl text-secondary hover:cursor-pointer hover:rounded-lg hover:bg-accent dark:text-slate-100 dark:hover:bg-primary ${
                    pathname === item.link &&
                    'rounded-lg bg-accent text-important dark:bg-primary dark:text-slate-100'
                  }`}
                >
                  {item.name}
                </p>
              </Link>
            ))}
          </div>
        </nav>

        <span className='ml-12 h-full border-l-2 border-primary opacity-25 dark:border-slate-400'></span>

        <div className='ml-6 text-primary dark:text-slate-50'>
          <ToggleDarkMode />
        </div>
      </div>
    </header>
  );
}
