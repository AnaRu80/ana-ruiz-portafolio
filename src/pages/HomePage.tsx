import { Text, TypingAnimationGroup } from '../components';
import { useTranslation } from 'react-i18next';
import { ContactFeature } from '../features';
import WomanCodingWhite from '../assets/svg/woman-coding-sitting-white.svg';
import WomanCodingDark from '../assets/svg/woman-coding-sitting-dark.svg';
import { useTheme } from '../context/ThemeContext';
import { greetingTextData } from '../data';
export function HomePage() {
  const { t } = useTranslation();
  const { isDarkTheme } = useTheme();

  return (
    <div className='h-full dark:bg-black '>
      <div className='flex flex-col sm:flex-row px-4  md:-mt-5 lg:-mt-10 xl:-mt-20 z-0 mb-5'>
        <div className='flex flex-col text-justify justify-center sm:w-1/2'>
          <TypingAnimationGroup translations={greetingTextData} />
          <Text
            size='2xl'
            isTitle
            fontWeight='bold'
            text={t('home.homeName')}
            classNameText='mr-auto mb-2 md:mb-4'
          />
          <Text
            size='xl'
            fontWeight='bold'
            text={t('home.homeIntro')}
            classNameText=' lg:leading-10 '
          />
        </div>
        <div className='flex justify-center items-center sm:w-1/2'>
          <img
            src={isDarkTheme ? WomanCodingWhite : WomanCodingDark}
            alt='Woman developing'
            className='w-2/4 sm:w-auto -mt-3 sm:mt-0'
          />
        </div>
      </div>
      <ContactFeature />
    </div>
  );
}
