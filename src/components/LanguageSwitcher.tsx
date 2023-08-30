import { useTranslation } from 'react-i18next';
import AmericanFlag from '../assets/images/american-flag.png';
import MexicanFlag from '../assets/images/mexican-flag.png';
export const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (language: string) => {
    i18n.changeLanguage(language);
  };

  return (
    <div>
      <img src={AmericanFlag} alt="American Flag"
        onClick={() => changeLanguage('en')}
        className='w-12' />
      <img src={MexicanFlag} alt="Mexican Flag"
        onClick={() => changeLanguage('es')}
        className='w-12 ' />

    </div>
  );
};
