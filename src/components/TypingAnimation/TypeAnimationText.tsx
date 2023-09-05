import { Text } from '../';
import { useDurationText } from './useDurationText';

export const TypingAnimationText = ({ text }: any) => {
  const { typedText } = useDurationText(text);
  return (
    <Text
      size='xl'
      fontWeight='bold'
      text={typedText + '!'}
      classNameText='mr-auto mb-1 md:mb-2 '
    />
  );
};
