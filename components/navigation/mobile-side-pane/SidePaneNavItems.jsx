import Link from 'next/link';
import LinkPage from '../../micros/LinkPage.jsx';
import { links } from '../Nav.links.js';

export default function SidePaneNavItems() {
  return (
    <>
      <nav className="pt-[10rem] text-accent flex flex-col items-center text-2xl">
 
        <ul className='space-y-14'>
          {links.map((item) => (
              <li key={item.key} className='hover:underline hover:underline-offset-4'>
                <LinkPage href={item.link}>
                  <a>{item.name}</a>
                </LinkPage>
              </li>
          ))}
        </ul>
      </nav>
    </>
  );
}
