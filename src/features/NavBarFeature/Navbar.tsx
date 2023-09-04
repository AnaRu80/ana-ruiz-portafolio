import { DarkModeSwitch, NavLinkCustom, NavMenuButton } from './components';
import AIcon from '../../assets/svg/a-icon.svg';
import { LanguageSwitcher } from '../../components';
import { NavLink } from 'react-router-dom';

export const NavBar: React.FC = () => {

  return (
    <header className=' z-10 flex items-center justify-between bg-black px-4 py-2 dark:border-b-2 dark:border-neutral-400 sm:py-3  '>
      <div className='flex flex-row items-center'>
        <NavLink to='/' className='relative text-white'>
          <img
            src={AIcon}
            alt='logo'
            className='h-10 w-10 sm:h-12 sm:w-12'
            loading='lazy'
          />
        </NavLink>

        <LanguageSwitcher />
      </div>

      <DarkModeSwitch />
      <NavMenuButton />
    </header>
  );
};
