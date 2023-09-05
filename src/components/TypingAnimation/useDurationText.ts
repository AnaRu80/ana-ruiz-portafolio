import React, { useState, useEffect } from 'react';

export function useDurationText(text: string) {
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

	return { typedText };
}
