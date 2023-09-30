import { MoonIcon, SunIcon } from '@heroicons/react/24/outline';
import useThemingMode from '../../../context/ThemingMode.context';

export default function ToggleDarkMode() {
  const { themingMode, handleToggleDarkMode } = useThemingMode();
  console.log('themingMode: ', themingMode);

  return (
    <button onClick={handleToggleDarkMode}>
      {themingMode === 'dark' ? (
        <SunIcon className='h-6 w-6 hover:rotate-12' />
      ) : (
        <MoonIcon className='h-6 w-6 hover:rotate-12' />
      )}
    </button>
  );
}
