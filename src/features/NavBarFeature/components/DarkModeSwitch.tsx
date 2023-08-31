import { useDarkModeToggle } from '../hooks';
import Sun from '../../../assets/svg/sun.svg';
import Moon from '../../../assets/svg/moon.svg';

export function DarkModeSwitch() {
  const { isDarkTheme, toggleDarkMode } = useDarkModeToggle();
  return (
    <button
      onClick={toggleDarkMode}
      type="button"
      className="h-10 w-10 cursor-pointer rounded-lg p-2.5 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-700 "
    >
      {isDarkTheme ? (
        <img src={Sun} alt="sun-icon" />
      ) : (
        <img src={Moon} alt="moon-icon" />
      )}
    </button>
  );
}
