import { ChevronDownIcon } from '@heroicons/react/20/solid';

export default function ButtonCool({ children, setOpen }) {
  return (
    <button
      className='flex items-center rounded-full bg-accent px-8 py-2 tracking-widest text-secondary hover:bg-primary hover:text-white dark:border-2 dark:border-slate-600 dark:bg-slate-900 dark:text-slate-50 dark:hover:bg-slate-800'
      onClick={() => setOpen(true)}
    >
      <ChevronDownIcon className='h-5 w-5' />
      <span className='pl-3 pb-1'>{children}</span>
    </button>
  );
}
