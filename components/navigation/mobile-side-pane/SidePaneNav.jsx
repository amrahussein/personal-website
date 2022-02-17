import { useState } from "react";
import LandingNavBrand from "../../micros/LandingNavBrand";
import ToggleMenu from "../../micros/ToggleMenu";
import SidePaneNavItems from "./SidePaneNavItems";

export default function SidePaneNav() {
  const [paneOpened, setPaneOpened] = useState(false);

  return (
    <>
      <div
        className={`z-50 top-0 right-0 fixed bg-secondary w-full h-full ease-out duration-200 ${
          paneOpened ? 'translate-x-0' : 'translate-x-full'
        } `}
      >

        <LandingNavBrand dark={true} />
        <SidePaneNavItems />
          
      </div>
      {!paneOpened ? (
        <button
          onClick={() => setPaneOpened(!paneOpened)}
          className='fixed z-10 top-0 right-0 mr-4 mt-4'
        >
          <ToggleMenu />
        </button>
      ) : (
          <button
          className='z-50 close text-accent fixed top-0 right-0 mr-4 mt-4'
          onClick={() => setPaneOpened(!paneOpened)}
          >
          <aside className='inline pr-3 align-top text-lg underline underline-offset-2'>
            Close
          </aside>{' '}
          <span className='text-2xl font-thin'>X</span>
        </button>
          
          

      )}
    </>
  )
}
