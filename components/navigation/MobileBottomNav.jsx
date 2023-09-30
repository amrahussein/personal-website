import Link from 'next/link';
import { useRouter } from 'next/router';
import useIsMobile from '../../context/IsMobile.context';
import { navLinks } from '../../data/socials/nav.links';
import { useUserScrolledDown } from '../../hooks/useUserScrolledDown';

export default function MobileBottomNav() {
  const { isMobile } = useIsMobile();
  const { pathname } = useRouter();
  const { userScrollDown } = useUserScrolledDown();

  return (
    <>
      {isMobile && (
        <section
          className={`tranistion fixed inset-x-0 bottom-0 z-10 block border-[0.13rem] border-t-accent bg-white duration-100 dark:border-t-slate-600 dark:border-l-primaryDark dark:border-r-primaryDark dark:border-b-primaryDark dark:bg-primaryDark ${
            userScrollDown && 'translate-y-full'
          } `}
        >
          <nav className='py-2 font-mono text-xl font-extrabold text-secondary'>
            <div className='flex flex-row justify-around space-x-3 px-3'>
              {navLinks.map((item) => (
                <Link key={item.key} href={item.link} passHref>
                  <a
                    aria-label={item.name}
                    rel='internal'
                    className={`w-full rounded-full bg-accent py-[0.1rem] px-4 text-center text-[.84rem] hover:text-important dark:bg-slate-600 dark:text-slate-50 dark:hover:text-important ${
                      pathname === item.link &&
                      'text-important dark:bg-zinc-800'
                    }`}
                  >
                    <p>{item.name}</p>
                  </a>
                </Link>
              ))}
            </div>
          </nav>
        </section>
      )}
    </>
  );
}
