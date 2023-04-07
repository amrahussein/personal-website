import Link from 'next/link';
import { socials } from './Social.links';

export default function ConnectMobileLanding() {
  return (
    <>
      <ul className='ml-10 flex flex-col justify-center space-y-5'>
        <span className='font-mono text-2xl font-extrabold text-gray-500'>
          Connect!
        </span>
        {socials?.map((item) => (
          <Link key={item.name} href={item.link}>
            <a
              rel='noopener noreferrer'
              target='_blank'
              aria-label={item.name}
              className='opacity-75'
            >
              <li className='flex w-7 items-center rounded-3xl hover:scale-110 hover:bg-accent'>
                {item.icon}
              </li>
            </a>
          </Link>
        ))}
      </ul>
    </>
  );
}
