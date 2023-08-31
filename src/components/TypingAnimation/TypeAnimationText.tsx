import React, { useState, useEffect } from 'react';
import { Text } from '../';

export const TypingAnimationText = ({ text }: any) => {
  const [typedText, setTypedText] = useState('');

  useEffect(() => {
    let currentIndex = 0;
    const interval = setInterval(() => {
      setTypedText(text.slice(0, currentIndex + 1));
      currentIndex++;

      if (currentIndex === text.length) {
        clearInterval(interval);
      }
    }, 100);

    return () => clearInterval(interval);
  }, [text]);

  return (
    <Text
      size='xl'
      fontWeight='bold'
      text={typedText + '!'}
      classNameText='mr-auto mb-1 md:mb-2 '
    />
  );
};
