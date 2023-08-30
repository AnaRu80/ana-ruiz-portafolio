import { Button, Text } from '../components';
import Sun from '../assets/images/sun-icon.png';
import Cloud from '../assets/images/cloud-icon.png';
export const NotFoundPage = () => {
	const handleGoHome = () => {
		window.location.href = '/';
	};
	return (
		<div className='flex flex-col items-center justify-center h-screen'>
			<div className='flex flex-row items-center justify-center '>
				<img
					src={Sun}
					className='w-32 h-32 spin-slower'
					alt='sun'
				/>
				<img
					src={Cloud}
					className='w-24 h-24  absolute left-1/2'
					alt='sun'
				/>
			</div>
			<Text size='4xl' fontWeight='bold' text='404 - Page Not Found' />
			<Text text='The page you are looking for does not exist.' classNameText='mt-2 mb-6' />
			<Button text="Go Home" type="primary" onClick={handleGoHome} />
		</div>
	);
};
