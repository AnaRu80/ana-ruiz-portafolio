import { useTranslation } from 'react-i18next';
import USAFlag from '../../../assets/svg/usa-flag.svg';
import SpainFlag from '../../../assets/svg/spain-flag.svg';
import QuebecFlag from '../../../assets/svg/quebec-flag.svg';
import { FaChevronDown } from 'react-icons/fa';
import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
const languages = [
  { code: 'en', name: 'English', flag: USAFlag },
  { code: 'es', name: 'Spanish', flag: SpainFlag },
  { code: 'fr', name: 'French', flag: QuebecFlag },
  // Add more languages as needed
];
export const LanguageSwitcher = () => {
  const [country, setCountry] = useState(languages[0]);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { i18n } = useTranslation();

  const changeLanguage = (language: any) => {
    i18n.changeLanguage(language.code);
    setCountry(language);
    setIsMenuOpen(false);
  };
  const handleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      <button
        className='flex-shrink-0 z-10 inline-flex items-center py-2 px-4 text-sm font-medium text-center rounded-lg bg-gray-700 hover:bg-gray-600 focus:ring-gray-700 text-white border-gray-600'
        type='button'
        onClick={handleMenu}
      >
        <img
          src={country.flag}
          alt={`${country.name} Flag`}
          className='rounded-full w-5 h-5 mr-2.5'
          loading='lazy'
        />
        <span>{country.name}</span>
        <FaChevronDown className='ml-2.5 -mr-1' aria-hidden='true' />
      </button>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            key={'language-switcher'}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5, type: 'spring' }}
            className='z-10   divide-y divide-gray-100 rounded-lg shadow w-44 bg-gray-700
        absolute
        '
          >
            <ul
              className='py-2 text-sm text-gray-200'
              aria-labelledby='states-button'
            >
              {languages.map(language => (
                <li key={language.code}>
                  <button
                    type='button'
                    className='inline-flex w-full px-4 py-2 text-sm text-gray-400 hover:bg-gray-600 hover:text-white'
                    onClick={() => changeLanguage(language)}
                  >
                    <div className='inline-flex items-center'>
                      <img
                        src={language.flag}
                        alt={`${language.name} Flag`}
                        className='rounded-full w-5 h-5 mr-2.5'
                        loading='lazy'
                      />
                      <p>{language.name}</p>
                    </div>
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
