'use client';

import { createContext, useContext } from 'react';

export const ShoudDisplayBottomNavContext = createContext();

export default function useShouldDisplayBottomNavMode() {
  return useContext(ShoudDisplayBottomNavContext);
}
