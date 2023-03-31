import Link from 'next/link'
import DesktopTopNav from '../navigation/DesktopTopNav'

export default function DesktopNavBrand({ dark = false }) {
  let topNavDark = `flex flex-row justify-between pt-2 pb-1 pr-4 pl-2 top-0 inset-x-0 fixed  sm:px-4 ... lg:px-8 ${
    dark
      ? 'bg-secondary text-accent'
      : 'z-10 bg-white border-[0.13rem] border-b-accent text-gray-600'
  }`
  return (
    <>
      <header className={topNavDark}>
        <h1 className='text-3xl font-extrabold pt-[0.18rem] pr-4'>
          <Link href='/'>
            <a>
              <strong className=''>amromoorie</strong>
              <span className={` ${dark ? 'text-cool' : 'text-primary'}`}>
                .com
              </span>
            </a>
          </Link>
        {/* <span className='border-2 border-gray-300 mx-4 rounded-full'></span> */}
        </h1>

        <DesktopTopNav />
      </header>
    </>
  )
}
