import { useState } from 'react';
import Amrologo from '../micros/Amrologo';
import ToggleMenu from '../micros/ToggleMenu';
import LandingNavBrand from './LandingNavBrand';
import MobileLandingNav from './MobileLandingNav';

export default function MobileLandingView() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div
        className={`top-0 right-0 fixed bg-secondary w-full h-full   ${
          open ? 'translate-x-0' : 'translate-x-full'
        } ease-out duration-200`}
      ></div>
      {!open ? (
        <button
          onClick={() => setOpen(!open)}
          className="absolute top-0 right-0 mr-4 mt-4"
        >
          <ToggleMenu />
        </button>
      ) : (
        <button
          className="close text-accent absolute top-0 right-0 mr-4 mt-4"
          onClick={() => setOpen(!open)}
        >
          <aside className="inline pr-3 align-top text-lg underline underline-offset-2">
            Close
          </aside>{' '}
          <span className="text-2xl font-thin">X</span>
        </button>
      )}

      <div className="ml-2 ">
        <header className="mt-3">
          <LandingNavBrand />
        </header>
        <main className="flex flex-col items-center mt-10  text-gray-700 ">
          <div className="shrink-0">
            <Amrologo w={200} h={200} style="rounded-full" />
          </div>
          <MobileLandingNav />
          <section>
            <hr className=' border mt-5 mx-5 border-important opacity-50' />
            <article className='text-gray-600  mt-5'>
              <h2 className='p-4 pt-5 text-4xl text-secondary opacity-50 text-right'>Nice to meet you!</h2>
              <p className='prose pl-5 pt-4 text-lg'>
                My name is <strong className='text-important opacity-80'>Amr Abdelkamel</strong>. I&apos;m passionate about web
                development.
              </p>

              <h3 className='p-4 pt-5 text-3xl'> <span className="text-important opacity-70"># </span>It starts with a connection!</h3>
            </article>
          </section>

          {/* <Socials  /> */}
        </main>
      </div>
    </>
  );
}
