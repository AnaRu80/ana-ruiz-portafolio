import { useState, useEffect } from 'react';

export function useChangeLanguage(translations: any) {
	const [currentLanguageIndex, setCurrentLanguageIndex] = useState(0);
	const languages = Object.keys(translations);
	const currentLanguage = languages[currentLanguageIndex];

	useEffect(() => {
		const timeForLanguage = translations[currentLanguage].length * 100 + 2000;

		const interval = setInterval(() => {
			const nextIndex = (currentLanguageIndex + 1) % languages.length;
			setCurrentLanguageIndex(nextIndex);
		}, timeForLanguage);

		return () => clearInterval(interval);
		// eslint-disable-next-line
	}, [currentLanguageIndex]);

	return { currentLanguage, languages };
}
