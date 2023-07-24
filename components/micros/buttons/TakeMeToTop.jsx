import { ArrowSmallUpIcon } from '@heroicons/react/24/solid';

export default function TakeMeToTop() {
  // ensure running on a browser context
  const isBrowser = () => typeof window !== 'undefined';
  return (
    <div className='sticky bottom-2 float-right mt-4 h-8 w-8 cursor-pointer rounded-full border-2 border-accent text-secondary dark:border-slate-400 dark:text-slate-300 sm:hidden '>
      <a
        onClick={(evt) => {
          // scroll to top
          if (!isBrowser()) return;
          evt.preventDefault();
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
      >
        <ArrowSmallUpIcon />
      </a>
    </div>
  );
}
