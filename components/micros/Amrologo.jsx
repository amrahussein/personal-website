import Link from 'next/link';
import { useContext, useState } from 'react';
import { AppContext } from '../App.context';

export default function Amrologo({ w = 300, h = 300 }) {
  const isMobile = useContext(AppContext);
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
                ? 'an image logo-like of Amr Abdelkamel'
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
                ? 'an image logo-like of Amr Abdelkamel'
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
          <h1>Amr Abdelkamel</h1>
        </figcaption>
        <div className='flex flex-col items-center justify-center py-4 text-gray-500 lg:py-6'>
          <h1 className='md:textd-lg pb-3 font-extrabold leading-3 sm:text-base'>
            <Link href='https://twitter.com/amromoorie' rel='twitter'>
              <a aria-label='twitter' target='_blank'>
                <span className='text-primary hover:text-secondary'>@</span>{' '}
                <strong className='font-extrabold text-secondary underline opacity-70 hover:text-primary'>
                  amromoorie
                </strong>
              </a>
            </Link>
          </h1>
          <p className='mb-[0.2rem] text-center text-sm text-secondary  sm:px-6 sm:leading-5'>
            <em>Passionate Developer</em>
          </p>
        </div>
      </div>
    </figure>
  );
}
