import { HeartIcon } from '@heroicons/react/24/solid';

export default function Copyright() {
  return (
    <section className='pl-2 text-sm'>
      <article className=''>
        <p>
          &copy; 2024 Amr A. Hussein - <span className=''>made with love</span>
          <span className='ml-1 inline-block h-4 w-4 pt-1 text-important'>
            <HeartIcon />
          </span>
        </p>
        <p>| Full-Stack Developer</p>
      </article>
    </section>
  );
}
