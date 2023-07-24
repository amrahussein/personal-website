import { useEffect, useRef, useState } from 'react';

export default function usePersistedState(key, initialState) {
  const isBrowser = typeof window !== 'undefined';
  const [state, setState] = useState(() => {
    if (isBrowser) {
      const storedState = localStorage.getItem(key);
      if (storedState !== null) {
        return storedState;
      }
    }
    return initialState;
  });
  const keyRef = useRef(key);


  useEffect(() => {
    localStorage.setItem(keyRef.current, state);
  }, [state]);

  useEffect(() => {
    const lastKey = keyRef.current;
    if (key !== lastKey) {
      localStorage.setItem(key, state);
      keyRef.current = key;
      localStorage.removeItem(lastKey);
    }
  }, [key, state]);

  return [state, setState];
}
