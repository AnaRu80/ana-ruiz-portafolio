import PlastiqImg from '../assets/images/plastiq-app.png';
import EqelonImg from '../assets/images/eqelon-app.png';
import GlobantImg from '../assets/images/globant-web.png';
import TaskManagerImg from '../assets/images/task-manager-web.png';
import WeatherImg from '../assets/images/weather-web.png';
import PexelsImg from '../assets/images/video-stream.app.png';
import { projectDataInterface } from './interfaces';

export const projectsData: projectDataInterface[] = [
	{
		id: 'plastiq',
		img: PlastiqImg,
		title: 'Plastiq',
		description:
			'Manage, track and unblock bills from anywhere. Keep your business running smoothly even when you’re out of the office',
		url: 'https://www.plastiq.com/mobile-app/',
		framework: 'React native | Ignite | React Navigation',
		ownership: 'private',
	},
	{
		framework: 'Next.js | Prisma | shadcn/ui',
		id: 'globant',
		img: GlobantImg,
		title: 'Globant',
		description: 'Globant recruitment site',
		url: 'https://career.globant.com/',
		ownership: 'private',
	},
	{
		framework: 'React | Redux | Material-Ui',
		id: 'taskManager',
		img: TaskManagerImg,
		title: 'Task Manager',
		description: 'Manage all your tasks in one place',
		url: 'https://anaru80.github.io/my-pendings/',
		ownership: 'own',
	},
	{
		framework: 'React | API | TailwindCSS',
		id: 'weatherWeb',
		img: WeatherImg,
		title: 'Weather App',
		description: 'Check the weather in your city',
		url: 'https://bright-cactus-4e37f6.netlify.app/',
		ownership: 'own',
	},
	{
		framework: 'Next.js | React | API',
		id: 'pexelsWeb',
		img: PexelsImg,
		title: 'Pexels Video Player',
		description:
			'A responsive video streaming app built with Next.js and React. It features a video list and a detailed player page with custom controls. The app uses the Pexels API to fetch videos and is styled with SCSS and modern UI components.',
		url: 'https://fabulous-tapioca-fd8fec.netlify.app/',
		ownership: 'own',
	},
	{
		framework: 'React Native | Redux | React Navigation',
		id: 'eqelonApp',
		img: EqelonImg,
		title: 'ËQELON APP',
		description:
			'Explore new opportunities, have access to details of your investment, and fund´s reports.',
		url: '#',
		ownership: 'private',
	},
];
