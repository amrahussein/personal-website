import Link from 'next/link';
import { socials } from './Social.links';

export default function ConnectMobileLanding() {
  return (
    <>
      <ul className='ml-10 flex flex-col justify-center space-y-5'>
        <li>
          <h2 className='font-mono text-2xl font-extrabold text-gray-500'>
            Connect!
          </h2>
        </li>
        {socials?.map((item) => (
          <Link key={item.name} href={item.link} passHref>
            <li className='flex w-7 items-center rounded-3xl hover:scale-110 hover:bg-accent'>
              <a
                rel='noopener noreferrer'
                target='_blank'
                className='opacity-75'
              >
                {item.icon}
              </a>
            </li>
          </Link>
        ))}
      </ul>
    </>
  );
}
