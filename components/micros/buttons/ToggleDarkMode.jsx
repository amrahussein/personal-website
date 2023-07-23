import useThemingMode from '../../../context/ThemingMode.context';
import MoonIcon from '../dark-mode/MoonIcon';
import SunIcon from '../dark-mode/SunIcon';

export default function ToggleDarkMode() {
  const { themingMode, handleToggleDarkMode, prefersDarkMode } =
    useThemingMode();

  return (
    <button onClick={handleToggleDarkMode}>
      {themingMode === 'dark' || (themingMode === 'auto' && prefersDarkMode) ? (
        <span className='cursor'>
          <SunIcon />
        </span>
      ) : (
        <span className='cursor'>
          <MoonIcon />
        </span>
      )}
    </button>
  );
}
