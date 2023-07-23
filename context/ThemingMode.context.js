import { createContext, useContext } from 'react';

export const ThemingModeContext = createContext();

export default function useThemingMode() {
  return useContext(ThemingModeContext);
}
