export default function TakeMeToTop() {
  // ensure running on a browser context
  const isBrowser = () => typeof window !== 'undefined';
  return (
    <div className='sticky bottom-6 float-right mt-4 h-8 w-8 cursor-pointer rounded-full border-2 border-accent text-secondary sm:hidden '>
      <a
        onClick={(evt) => {
          // scroll to top
          if (!isBrowser()) return;
          evt.preventDefault();
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
      >
        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          strokeWidth={1.5}
          stroke='currentColor'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            d='M4.5 10.5L12 3m0 0l7.5 7.5M12 3v18'
          />
        </svg>
      </a>
    </div>
  );
}
