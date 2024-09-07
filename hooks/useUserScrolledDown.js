'use client';

import { debounce } from 'lodash-es';
import { useEffect, useState } from 'react';

/**
 * tracks whether the user has scrolled down the page.
 * @returns {boolean} Whether the user has scrolled down the page.
 */

export function useUserScrolledDown() {
  const [userScrollDown, setUserScrollDown] = useState(false);
  const [scrollPrevPosition, setScrollPrevPosition] = useState(0);

  const handleScroll = () => {
    const scrollCurrentPosition = window.pageYOffset;

    // evaluate to true only when user has scrolled more than 100px
    // - also ensure a safe margin to top of the page: 10px
    setUserScrollDown(
      (scrollPrevPosition < scrollCurrentPosition &&
        scrollPrevPosition - scrollCurrentPosition < 100) ||
        scrollCurrentPosition < -10,
    );

    setScrollPrevPosition(scrollCurrentPosition);
  };

  // use debounce - by delaying in between registers 70 milliseconds of inactivity
  const handleScrollDebounced = debounce(handleScroll, 70);

  useEffect(() => {
    window.addEventListener('scroll', handleScrollDebounced);

    return () => window.removeEventListener('scroll', handleScrollDebounced);
  }, [scrollPrevPosition, userScrollDown, handleScrollDebounced]);

  return { userScrollDown };
}
