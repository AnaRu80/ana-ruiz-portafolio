import { DarkModeSwitch, NavMenuButton } from './components';
import AIcon from '../../assets/svg/a-icon.svg';
import { LanguageSwitcher } from '../../components';
export const NavBar: React.FC = () => {


  return (
    <header className="flex items-center justify-between bg-neutral-900 px-4 py-2 dark:border-b-2 dark:border-neutral-400 sm:py-3  ">
      <a href="/" className="relative text-white">
        <img
          src={AIcon}
          alt="logo"
          className="h-10 w-10 sm:h-12 sm:w-12"
        />

      </a>
      <LanguageSwitcher />
      <DarkModeSwitch />
      <NavMenuButton />
    </header>
  );
};
