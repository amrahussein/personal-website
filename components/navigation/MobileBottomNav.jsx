import LinkPage from '../micros/LinkPage.jsx'
import { useState, useEffect } from 'react'
import { links } from './Nav.links.js'
import { debounce } from 'lodash'

export default function MobileBottomNav({ mobile }) {
  const [scrollPrevPosition, setScrollPrevPosition] = useState(0)
  const [hideNav, setHideNav] = useState(false)
  console.log('hideNav: ', hideNav)

  const handleScroll = () => {
    const scrollCurrentPosition = window.pageYOffset
    console.log('scrollCurrentPosition: ', scrollCurrentPosition)

    setHideNav(
      (scrollPrevPosition < scrollCurrentPosition &&
        scrollPrevPosition - scrollCurrentPosition < 100) ||
        scrollCurrentPosition < -10
    )

    setScrollPrevPosition(scrollCurrentPosition)
  }
  // register scroll event correctly for performance reason - by delaying in between registers
  const handleScrollDebounced = debounce(handleScroll, 200)

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
              {links.map((item, idx) => (
                <li
                  key={item.key}
                  className='py-2   w-full  bg-accent rounded-full  inline-block text-center'
                >
                  <LinkPage href={item.link}>
                    <a className='block text-xs hover:text-important'>
                      {item.name}
                    </a>
                  </LinkPage>
                </li>
              ))}
            </ul>
          </nav>
        </section>
      )}
    </>
  )
}
