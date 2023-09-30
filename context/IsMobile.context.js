import { createContext, useContext } from 'react';

export const IsMobileContext = createContext();

export default function useIsMobile() {
  return useContext(IsMobileContext);
}
