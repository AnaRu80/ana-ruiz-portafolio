import { TypingAnimationText } from './TypeAnimationText';
import { useChangeLanguage } from './useChangeLanguage';

export const TypingAnimationGroup = ({ translations }: any) => {
  const { currentLanguage } = useChangeLanguage(translations);
  return (
    <div>
      <TypingAnimationText text={translations[currentLanguage]} />
    </div>
  );
};
