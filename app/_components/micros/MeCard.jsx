import Link from 'next/link';
import { useState } from 'react';
import useIsMobile from '../../../context/IsMobile.context';
import basePath from '../../utils/basePath';

export default function MeCard({ w = 300, h = 300 }) {
  const { isMobile } = useIsMobile();
  const [mainImg, setMainImg] = useState(true);

  return (
    <figure>
      <div className='inline-block w-[8rem] rounded-full border-2 border-accent'>
        {isMobile ? (
          <img
            className='rounded-full'
            src={`${basePath}${
              mainImg
                ? '/img/hero-landing/amrologo-mobile.jpg'
                : '/img/hero-landing/catlogo.jpg'
            }`}
            alt={
              mainImg
                ? 'an image logo-like of Amr Abdelkamel Hussein'
                : 'a cat wondering'
            }
            width={w}
            height={h}
            // Click for Mobile mainly
            onClick={() => setMainImg(!mainImg)}
          />
        ) : (
          <img
            className='rounded-full'
            src={`${basePath}${
              mainImg
                ? '/img/hero-landing/amrologo.jpg'
                : '/img/hero-landing/catlogo.jpg'
            }`}
            alt={
              mainImg
                ? 'an image logo-like of Amr Abdelkamel Hussein'
                : 'a cat wondering'
            }
            width={w}
            height={h}
            // Hover for Desktop mainly
            onMouseOut={() => setMainImg(true)}
            onMouseOver={() => setMainImg(false)}
          />
        )}
        <figcaption className='hidden'>
          <h1>Amr Abdelkamel Hussein</h1>
        </figcaption>
        <div className='flex flex-col items-center justify-center py-6 text-gray-500 lg:py-8 '>
          <h1 className='md:textd-lg sm:text-md pb-3 text-sm font-extrabold leading-3'>
            <Link
              aria-label=''
              target='_blank'
              rel=''
            >
              <span className='text-primary hover:text-secondary dark:text-important dark:hover:text-primary'>
                @
              </span>{' '}
              <strong className='font-extrabold text-secondary underline opacity-70 hover:text-primary dark:text-slate-50 dark:hover:text-slate-300'>
                amrahussein
              </strong>
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
