import { TiWeatherPartlySunny } from 'react-icons/ti';
import { DarkModeSwitch, NavMenuButton } from './components';

export const NavBar: React.FC = () => {


  return (
    <header className="flex items-center justify-between bg-neutral-900 px-4 py-2 dark:border-b-2 dark:border-neutral-400 sm:py-3 ">
      <a href="/" className="relative">
        <TiWeatherPartlySunny className="text-4xl text-white" />

      </a>
      <DarkModeSwitch />
      <NavMenuButton />
    </header>
  );
};
