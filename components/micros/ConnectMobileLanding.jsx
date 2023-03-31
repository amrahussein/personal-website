import Link from 'next/link';
import { socials } from './Social.links';

export default function ConnectMobileLanding() {
  return (
    <ul className='ml-10 flex flex-col justify-center space-y-5'>
        <h2 className='text-2xl font-mono text-gray-500 font-extrabold'>Connect!</h2>
      {socials?.map((item) => (
        <Link key={item.name} href={item.link}>
          <a rel='noopener noreferrer' target='_blank' className='opacity-75'>
            <li className='flex items-center w-7 rounded-3xl hover:scale-110 hover:bg-accent '>
              {item.icon}
            </li>
          </a>
        </Link>
      ))}
    </ul>
  );
}
