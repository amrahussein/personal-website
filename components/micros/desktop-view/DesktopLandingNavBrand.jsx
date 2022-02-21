import Link from 'next/link'
import DesktopTopNav from '../../navigation/DesktopTopNav'
export default function DesktopLandingNavBrand({ dark = false }) {
  let topNavDark = `flex flex-row  justify-between pt-3 pb-2 pr-4 top-0 inset-x-0 fixed
  pt-3 pb-2 pl-2 top-0 inset-x-0 fixed ${
    dark
      ? 'bg-secondary text-accent'
      : 'z-10 bg-white border-[0.13rem] border-b-accent text-gray-600'
  }`
  return (
    <>
      <header className={topNavDark}>
        <h1 className='text-3xl font-extrabold'>
          <Link href='/'>
            <a>
              <strong className=''>amromoorie</strong>
              <span className={` ${dark ? 'text-cool' : 'text-primary'}`}>
                .com
              </span>
            </a>
          </Link>
        </h1>
 
        <DesktopTopNav />
      </header>
    </>
  )
}
