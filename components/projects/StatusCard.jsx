export default function StatusCard({ close, setClose }) {
  return (
    <>
      {!close && (
        // Core Feat.
        <div className='mt-4 rounded-lg border-2 border-solid border-accent pl-2 text-sm sm:w-[14.5rem]'>
          <div className='inline-flex items-center space-x-2'>
            <span
              title='Project Core Functionalities has Done'
              className='inline-block h-4 w-4 rounded-full bg-green-500'
            ></span>
            <p> Core Feat. </p>
            <span
              title='Project Core Functionalities has Done'
              className='h-5 w-5 text-xs text-secondary dark:text-slate-300'
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth={2}
                stroke='currentColor'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
                />
              </svg>
            </span>
          </div>

          {/* Under Developemnt */}
          <div className='inline-flex items-center space-x-2'>
            <span
              title='Project is Under Development'
              className='inline-block h-4 w-4 rounded-full bg-yellow-500'
            ></span>
            <p>Under Development</p>
            <span
              title='Project is Under Development'
              className='h-5 w-5 text-secondary dark:text-slate-300'
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth={2}
                stroke='currentColor'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z'
                />
              </svg>
            </span>
          </div>

          {/* close button */}
          <div
            title='Hide'
            onClick={() => setClose(true)}
            className='float-right inline-block h-6 w-6 cursor-pointer rounded-lg border-2 border-gray-200 text-secondary dark:text-slate-300'
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
                d='M6 18L18 6M6 6l12 12'
              />
            </svg>
          </div>
        </div>
      )}
    </>
  );
}
