import {
  CheckCircleIcon,
  ExclamationCircleIcon,
  XMarkIcon,
} from '@heroicons/react/20/solid';

export default function StatusCard({ close, setClose }) {
  return (
    <>
      {!close && (
        // Core Feat.
        <div className='mt-4 rounded-lg border-2 border-solid border-accent pl-2 text-sm sm:w-[14.5rem]'>
          <div className='inline-flex items-center space-x-2 pt-1'>
            <span
              title='Project Core Functionalities has Done'
              className='inline-block h-4 w-4 rounded-full bg-green-500'
            ></span>
            <p> Core Feat. </p>
            <span
              title='Project Core Functionalities has Done'
              className='h-5 w-5 text-xs text-secondary dark:text-slate-300'
            >
              <CheckCircleIcon />
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
              <ExclamationCircleIcon />
            </span>
          </div>

          {/* close button */}
          <div
            title='Hide'
            onClick={() => setClose(true)}
            className='float-right inline-block h-6 w-6 cursor-pointer rounded-lg border-2 border-gray-200 text-secondary dark:text-slate-300'
          >
            <XMarkIcon />
          </div>
        </div>
      )}
    </>
  );
}
