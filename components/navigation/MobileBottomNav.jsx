import { debounce } from 'lodash-es'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useContext, useEffect, useState } from 'react'
import { AppContext } from '../App.context'
import { links } from './Nav.links.js'



export default function MobileBottomNav() {
  const mobile = useContext(AppContext)

  const { pathname } = useRouter()
  const [scrollPrevPosition, setScrollPrevPosition] = useState(0)
  const [hideNav, setHideNav] = useState(false)

  const handleScroll = () => {
    const scrollCurrentPosition = window.pageYOffset

    setHideNav(
      (scrollPrevPosition < scrollCurrentPosition &&
        scrollPrevPosition - scrollCurrentPosition < 100) ||
        scrollCurrentPosition < -10
    )

    setScrollPrevPosition(scrollCurrentPosition)
  }
  // register scroll event correctly for performance reason - by delaying in between registers
  const handleScrollDebounced = debounce(handleScroll, 70)

  useEffect(() => {
    window.addEventListener('scroll', handleScrollDebounced)

    return () => window.removeEventListener('scroll', handleScrollDebounced)
  }, [scrollPrevPosition, hideNav, handleScrollDebounced])

  return (
    <>
      {mobile && (
        <section
          className={`z-10 border-[0.13rem] border-t-accent bg-white block fixed inset-x-0 bottom-0 tranistion duration-100 ${
            hideNav ? 'translate-y-full' : ''
          } `}
        >
          <nav className=' py-2 text-primary font-extrabold  text-xl  '>
            <ul className='px-3 flex justify-around  flex-row space-x-5'>
              {links.map((item) => (
                <Link key={item.key} href={item.link} passHref>
                  <li
                    className={`py-2 w-full bg-accent rounded-full inline-block text-center ${
                      pathname === item.link ? 'text-important' : ''
                    }`}
                  >
                    <a
                      aria-label={item.name}
                      className='block text-xs hover:text-important'
                    >
                      {item.name}
                    </a>
                  </li>
                </Link>
              ))}
            </ul>
          </nav>
        </section>
      )}
    </>
  )
}
