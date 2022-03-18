import Link from 'next/link'
import { useState } from 'react'

export default function Amrologo({ w = 200, h = 200 }) {
  const [mainLogo, setMainLogo] = useState(true)

  return (
    <figure>
      <div className='border-2 border-accent inline-block rounded-full'>
        <img
          className='rounded-full'
          src={mainLogo ? '/img/amrologo.jpg' : '/img/catlogo.jpg'}
          alt={
            mainLogo
              ? 'an image logo-like of Amr Abdelkamel'
              : 'a cat wondering'
          }
          width={w}
          height={h}
          // Click for Mobile mainly
          onClick={() => setMainLogo(!mainLogo)}
          // Hover for Desktop mainly
          onMouseOut={() => setMainLogo(true)}
          onMouseOver={() => setMainLogo(false)}
        />
        <figcaption className='hidden'>
          <h1>Amr Abdelkamel</h1>
        </figcaption>
        <div className='py-4 text-gray-500 flex flex-col justify-center items-center ... lg:py-6'>
          <h1 className='pb-2 ... sm:text-base md:text-sm'>
            <Link href='https://twitter.com/amromoorie' rel='twitter'>
              <a aria-label='twitter' target='_blank'>
                <span className='text-primary font-extrabold hover:text-secondary'>
                  @
                </span>{' '}
                <strong className='text-secondary opacity-70 hover:text-primary'>
                  amromoorie
                </strong>
              </a>
            </Link>
          </h1>
          <p className='mb-[0.3rem] text-sm text-secondary ... md:text-xs'>
            <em>Hello World! 👋</em>
          </p>
        </div>
      </div>
    </figure>
  )
}
