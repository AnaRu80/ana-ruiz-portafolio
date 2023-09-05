import { useEffect } from 'react';
import { useTheme } from '../../../context/ThemeContext';

export const useDarkModeToggle = () => {
	const { isDarkTheme, setTheme } = useTheme();

	const toggleDarkMode = () => {
		if (isDarkTheme) {
			document.documentElement.classList.remove('dark');
			localStorage.setItem('theme', 'light');
			setTheme(false);
		} else {
			document.documentElement.classList.add('dark');
			localStorage.setItem('theme', 'dark');
			setTheme(true);
		}
	};
	const handleTheme = () => {
		const theme = localStorage.getItem('theme');
		if (theme === 'dark') {
			setTheme(true);
			document.documentElement.classList.add('dark');
		}
	};

	useEffect(() => {
		handleTheme();
		// eslint-disable-next-line
	}, []);

	return { isDarkTheme, toggleDarkMode };
};
