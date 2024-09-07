'use client';

import { ShoudDisplayBottomNavContext } from '../context/ShouldDisplayBottomNav.context';
import usePersistedState from '../hooks/usePersistedState';

export function BottomNavProvider({ children }) {
  const [shouldDisplayBottomNav, setShouldDisplayBottomNav] = usePersistedState(
    'should-display-bottom-nav',
    true,
  );

  const handleShouldDisplayBottomNav = () =>
    setShouldDisplayBottomNav((prev) => !prev);

  return (
    <ShoudDisplayBottomNavContext.Provider
      value={{
        shouldDisplayBottomNav,
        handleShouldDisplayBottomNav,
      }}
    >
      {children}
    </ShoudDisplayBottomNavContext.Provider>
  );
}
