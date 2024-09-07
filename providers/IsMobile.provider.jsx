'use client';

import { useEffect, useState } from 'react';
import { IsMobileContext } from '../context/IsMobile.context';

export function IsMobileProvider({ children }) {
  //  get window inner width on initial rendering for responsive view
  const [width, setWidth] = useState(
    typeof window !== 'undefined' ? window.innerWidth : undefined,
  );

  const [isMobile, setIsMobile] = useState(null);

  useEffect(() => {
    // match tailwind breakpoint of md screens
    const breakpoint = 768;
    window.addEventListener('resize', () => setWidth(window.innerWidth));

    width < breakpoint ? setIsMobile(true) : setIsMobile(false);
    return () =>
      window.removeEventListener('resize', () => setWidth(window.innerWidth));
  }, [width]);

  return (
    <IsMobileContext.Provider value={{ isMobile }}>
      {children}
    </IsMobileContext.Provider>
  );
}
