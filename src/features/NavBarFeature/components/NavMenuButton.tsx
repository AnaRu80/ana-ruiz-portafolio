import { useMenuToggle } from '../hooks';
import { CgMenuGridR, CgClose } from 'react-icons/cg'
import { NavLinkCustom } from '.';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';


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
          <motion.div
            initial={{ rotate: 0 }}
            animate={{ rotate: 90 }}
          > <CgClose className='h-8 w-8 z-40' /></motion.div>
        ) : (
          <motion.div
          > <CgMenuGridR className='h-8 w-8 z-40' /></motion.div>
        )}
      </button>

      {isMobileMenuOpen && (
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: .5 }}
          onClick={closeMobileMenu}
          className='absolute inset-0 z-20 h-full w-full cursor-default bg-neutral-900 opacity-50'
        ></motion.button>
      )}
      {isMobileMenuOpen && (
        <motion.div
          onClick={closeMobileMenu}

          initial={{ opacity: 0, x: "100vw" }}
          animate={{ opacity: 1, x: 0, }}
          transition={{ duration: .5, type: "spring", }}
          className='absolute right-0 z-20 mt-2 w-full sm:w-6/12 origin-top-right rounded-md text-white  bg-yellow-300 shadow-lg'
        >
          <NavLinkCustom to="/">{t('nav.home')}</NavLinkCustom>
          <NavLinkCustom to="/about">{t('nav.aboutMe')}</NavLinkCustom>
          <NavLinkCustom to="/projects">{t('nav.projects')}</NavLinkCustom>
          <NavLinkCustom to="/resume">{t('nav.resume')}</NavLinkCustom>

        </motion.div>
      )}

    </div >
  );
}
