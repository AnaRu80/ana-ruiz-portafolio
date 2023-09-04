import { Button, Text } from '../components';
import AlienCow from '../assets/svg/alien-cow.svg';
import { useTranslation } from 'react-i18next';

export const NotFoundPage = () => {
	const { t } = useTranslation();

	const handleGoHome = () => {
		window.location.href = '/';
	};
	return (
		<div className='flex flex-col items-center justify-center'>
			<div className='flex flex-row items-center justify-center '>
				<img
					src={AlienCow}
					className=' w-64'
					alt='sun'
				/>

			</div>
			<Text size='4xl' fontWeight='bold' text={t('notFound')} />
			<Text text={t('contentNotFound')} classNameText='mt-2 mb-6' />
			<Button text={t('goHome')} type='default' onClick={handleGoHome} />
		</div>
	);
};
