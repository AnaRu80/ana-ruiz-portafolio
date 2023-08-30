import { useMenuToggle } from '../hooks';
import { CgMenuGridR, CgClose } from 'react-icons/cg'
import { NavLinkCustom } from '.';

export function NavMenuButton() {
  const { isMobileMenuOpen, closeMobileMenu, toggleMobileMenu } = useMenuToggle();
  return (
    <div>
      <button
        type='button'
        className='relative z-10 block text-white hover:text-neutral-500 cursor-pointer
				focus:text-white focus:outline-none '
        onClick={toggleMobileMenu}
      >
        {isMobileMenuOpen ? (
          <CgClose className='h-8 w-8 z-40' />
        ) : (
          <CgMenuGridR className='h-8 w-8' />
        )}
      </button>

      {isMobileMenuOpen && (
        <button
          onClick={closeMobileMenu}
          className='absolute inset-0 z-20 h-full w-full cursor-default bg-neutral-900 opacity-50'
        ></button>
      )}
      <div
        onClick={closeMobileMenu}
        tabIndex={-1}
        className={`
						${isMobileMenuOpen ? 'absolute' : 'hidden'}
						right-0 z-20 mt-2 w-full sm:w-6/12 origin-top-right rounded-md text-white  bg-yellow-300 shadow-lg `}
      >
        <NavLinkCustom to="/">Home</NavLinkCustom>
        <NavLinkCustom to="/about">About</NavLinkCustom>
        <NavLinkCustom to="/projects">Project</NavLinkCustom>
        <NavLinkCustom to="/resume">Resume</NavLinkCustom>
      </div>
    </div >
  );
}
