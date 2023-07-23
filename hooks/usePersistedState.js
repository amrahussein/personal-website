import { useEffect, useRef, useState } from 'react';

export default function usePersistedState(key, initialState) {
  const [state, setState] = useState(initialState);
  const keyRef = useRef(key);

  useEffect(() => {
    const storedState = localStorage.getItem(key);
    if (storedState !== null) {
      setState(storedState);
      return;
    }
    localStorage.setItem(key, initialState);
    setState(initialState);
  }, []);

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
