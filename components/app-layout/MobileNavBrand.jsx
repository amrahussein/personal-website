import Link from 'next/link';

export default function MobileNavBrand({ dark = false }) {
  let topNavDark = dark
    ? ' bg-secondary pt-3 pb-2 pl-2 top-0 inset-x-0 fixed text-accent'
    : 'z-10 bg-white pt-3 pb-2 pl-2 top-0 inset-x-0 fixed border-[0.13rem] border-b-accent text-gray-600';
  return (
    <>
      <header className={topNavDark}>
        <h1 className='text-3xl pb-1 font-extrabold'>
          <Link href='/'>
            <a>
              <strong className=''>amromoorie</strong>
              <span className={` ${dark ? 'text-cool' : 'text-primary'}`}>
                .com
              </span>
            </a>
          </Link>
        </h1>
      </header>
    </>
  );
}
