import Link from 'next/link';
import { useContext, useState } from 'react';
import { AppContext } from '../App.context';

export default function Amrologo({ w = 300, h = 300 }) {
  const mobile = useContext(AppContext);
  const [mainLogo, setMainLogo] = useState(true);

  return (
    <figure>
      <div className='w-[8rem] border-2 border-accent inline-block rounded-full'>
        {mobile ? (
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
        <div className='py-4 text-gray-500 flex flex-col justify-center items-center ... lg:py-6'>
          <h1 className='pb-3 leading-3 font-extrabold ... sm:text-base md:textd-lg'>
            <Link href='https://twitter.com/amromoorie' rel='twitter'>
              <a aria-label='twitter' target='_blank'>
                <span className='text-primary hover:text-secondary'>@</span>{' '}
                <strong className='underline font-extrabold text-secondary opacity-70 hover:text-primary'>
                  amromoorie
                </strong>
              </a>
            </Link>
          </h1>
          <p className='mb-[0.2rem] text-sm text-center text-secondary ...  sm:px-6 sm:leading-5'>
            <em>Passionate Developer</em>
          </p>
        </div>
      </div>
    </figure>
  );
}
