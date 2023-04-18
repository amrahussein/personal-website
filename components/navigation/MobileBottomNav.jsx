import Link from 'next/link';
import { useRouter } from 'next/router';
import { useContext } from 'react';
import { navLinks } from '../../data/socials/nav.links';
import { useUserScrolledDown } from '../../hooks/useUserScrolledDown';
import { AppContext } from '../App.context';

export default function MobileBottomNav() {
  const mobile = useContext(AppContext);
  const { pathname } = useRouter();
  const { userScrollDown } = useUserScrolledDown();

  return (
    <>
      {mobile && (
        <section
          className={`tranistion fixed inset-x-0 bottom-0 z-10 block border-[0.13rem] border-t-accent bg-white duration-100 ${
            userScrollDown && 'translate-y-full'
          } `}
        >
          <nav className='py-2 font-mono text-xl font-extrabold text-secondary'>
            <ul className='flex flex-row justify-around space-x-3 px-3'>
              {navLinks.map((item) => (
                <Link key={item.key} href={item.link} passHref>
                  <a
                    aria-label={item.name}
                    rel='internal'
                    className={`w-full rounded-full bg-accent py-[0.3rem] px-4 text-center text-xs hover:text-important ${
                      pathname === item.link && 'text-important'
                    }`}
                  >
                    <li>{item.name}</li>
                  </a>
                </Link>
              ))}
            </ul>
          </nav>
        </section>
      )}
    </>
  );
}
