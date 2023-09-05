import { useTranslation, Trans } from 'react-i18next';
import WomanDevelop from '../assets/svg/woman-coding-standing.svg';
import { Text, TransitionPage } from '../components';
import { SkillsFeature, ToolsFeature } from '../features';

export function AboutPage() {
  const { t } = useTranslation();

  return (
    <TransitionPage>
      <div className='px-4'>
        <div className='flex flex-col sm:flex-row '>
          <div className='flex flex-col justify-center items-center sm:w-1/2'>
            <Text size='3xl' isTitle fontWeight='bold' text={t('aboutMeTitle')} />
            <Text size='lg' classNameText='mt-5 text-justify'>
              <Trans> {t('aboutMeContent')} </Trans>
            </Text>
          </div>
          <div className='flex justify-center items-center sm:w-1/2'>
            <img src={WomanDevelop} alt='Woman developing' loading="lazy"
            />
          </div>
        </div>
        <SkillsFeature />
        <ToolsFeature />
      </div>
    </TransitionPage>
  );
}
