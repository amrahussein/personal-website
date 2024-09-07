import Link from 'next/link';
import { socials } from '../../../data/socials/social-meta.data';

export default function ConnectMobileLanding() {
  return (
    <section className='ml-10 flex flex-col justify-center space-y-5'>
      <h2 className='font-mono text-2xl font-extrabold text-gray-500 dark:text-slate-200'>
        Connect!
      </h2>
      {socials?.map((item) => (
        <Link
          rel='noopener noreferrer'
          target='_blank'
          className='opacity-76'
          aria-label={item.ariaLabel}
          key={item.name}
          href={item.link}
        >
          <span className='flex w-7 items-center rounded-3xl text-primary hover:scale-110 dark:text-slate-50'>
            {item.icon}
          </span>
        </Link>
      ))}
    </section>
  );
}
