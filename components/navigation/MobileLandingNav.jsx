import Link from 'next/link';
import { links } from './Nav.links.jsx';

export default function MobileLandingNav() {
  return (
    <>
      <nav className=" text-primary font-extrabold mt-8 text-xl ">
        <ul className="flex flex-row space-x-14">
          {links.map((item, idx) => (
            <>
              <Link key={idx} href={item.link} >
                <a className='hover:text-important'>{item.name}</a>
              </Link>
            </>
          ))}
        </ul>
      </nav>
    </>
  );
}
