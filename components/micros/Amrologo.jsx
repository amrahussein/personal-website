import Link from 'next/link';
import { useContext, useState } from 'react';
import { IsMobileContext } from '../../context/Mobile.context';

export default function Amrologo({ w = 300, h = 300 }) {
  const isMobile = useContext(IsMobileContext);
  const [mainLogo, setMainLogo] = useState(true);

  return (
    <figure>
      <div className='inline-block w-[8rem] rounded-full border-2 border-accent'>
        {isMobile ? (
          <img
            className='rounded-full'
            src={
              mainLogo
                ? '/img/hero-landing/amrologo-mobile.jpg'
                : '/img/hero-landing/catlogo.jpg'
            }
            alt={
              mainLogo
                ? 'an image logo-like of Amr Abdelkamel Hussein'
                : 'a cat wondering'
            }
            width={w}
            height={h}
            // Click for Mobile mainly
            onClick={() => setMainLogo(!mainLogo)}
          />
        ) : (
          <img
            className='rounded-full'
            src={
              mainLogo
                ? '/img/hero-landing/amrologo.jpg'
                : '/img/hero-landing/catlogo.jpg'
            }
            alt={
              mainLogo
                ? 'an image logo-like of Amr Abdelkamel Hussein'
                : 'a cat wondering'
            }
            width={w}
            height={h}
            // Hover for Desktop mainly
            onMouseOut={() => setMainLogo(true)}
            onMouseOver={() => setMainLogo(false)}
          />
        )}
        <figcaption className='hidden'>
          <h1>Amr Abdelkamel Hussein</h1>
        </figcaption>
        <div className='flex flex-col items-center justify-center py-6 text-gray-500 lg:py-8 '>
          <h1 className='md:textd-lg sm:text-md pb-3 text-sm font-extrabold leading-3'>
            <Link href='https://twitter.com/amrakhussein' rel='twitter'>
              <a aria-label='twitter' target='_blank'>
                <span className='text-primary hover:text-secondary dark:text-important dark:hover:text-primary'>
                  @
                </span>{' '}
                <strong className='font-extrabold text-secondary underline opacity-70 hover:text-primary dark:text-slate-50 dark:hover:text-slate-300'>
                  amrakhussein
                </strong>
              </a>
            </Link>
          </h1>
          <p className='mb-[0.2rem] text-center text-sm text-secondary dark:text-slate-50 sm:px-6 sm:leading-5'>
            <em>Passionate Developer</em>
          </p>
        </div>
      </div>
    </figure>
  );
}
