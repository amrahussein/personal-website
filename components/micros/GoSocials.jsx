import Link from 'next/link'
import { socials } from './Social.links'
import { useContext, useEffect, useState } from 'react';
import { AppContext } from '../App.context';

export default function GoSocials({
  styleSocialItems,
  linkStyle,
  socialNames = true,
}) {


  const mobile = useContext(AppContext);

  const [loading, setLoading] = useState(true);
  console.log('loading: ', loading);
  console.log('social names: ',socialNames);

  // load only when device inner width is specified
  useEffect(() => {
    if (mobile !== null) {
      setLoading(false);
    }
  }, [mobile]);



  
  return (
    <>
    {
      <section
      className={`${
        styleSocialItems
        ? styleSocialItems
        : 'mt-10 grid grid-cols-2 gap-7'
      }`}
    >
    {socials.map((item) => (
      <Link key={item.name} href={item.link}>
          <a
            rel='noopener noreferrer'
            target='_blank'
            className='2xl pt-1 text-center font-semibold opacity-75 tracking-wider text-important'
            >
            <div
              className={`${
                linkStyle
                ? linkStyle
                : 'flex flex-col p-2 w-24 h-24 space-y-4 rounded-3xl hover:scale-110 hover:bg-accent ... sm:w-32 sm:h-32'
              }`}
              >
              {item.icon}
              {socialNames && <p className='text-sm text-secondary opacity-100 hover:opacity-100'>{item.name}</p>}
            </div>
          </a>
        </Link>
      ))}
      </section>
    }
                </>
      )
    }
    