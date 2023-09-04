import { useMenuToggle } from '../hooks';
import { CgMenuGridR, CgClose } from 'react-icons/cg'
import { NavLinkCustom } from '.';
import { useTranslation } from 'react-i18next';
export function NavMenuButton() {
  const { isMobileMenuOpen, closeMobileMenu, toggleMobileMenu } = useMenuToggle();
  const { t } = useTranslation();
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
        <NavLinkCustom to="/">{t('nav.home')}</NavLinkCustom>
        <NavLinkCustom to="/about">{t('nav.aboutMe')}</NavLinkCustom>
        <NavLinkCustom to="/projects">{t('nav.projects')}</NavLinkCustom>
        <NavLinkCustom to="/resume">{t('nav.resume')}</NavLinkCustom>

      </div>
    </div >
  );
}
