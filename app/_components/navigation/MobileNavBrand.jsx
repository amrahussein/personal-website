import Link from 'next/link';

export default function MobileNavBrand({ paneOpened = false }) {
  return (
    <h1 className='pb-1 text-3xl font-extrabold'>
      <Link href='/'>
        <strong className='dark:text-slate-300'>amr</strong>
        <span
          className={` ${
            paneOpened ? 'text-cool' : 'text-primary dark:text-important'
          }`}
        >
          ahussein
        </span>
      </Link>
    </h1>
  );
}
