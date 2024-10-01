import PlastiqImg from '../assets/images/plastiq-app.png';
import EqelonImg from '../assets/images/eqelon-app.png';
import EqelonWebImg from '../assets/images/eqelon-web.png';
import GlobantImg from '../assets/images/globant-web.png';
import TaskManagerImg from '../assets/images/task-manager-web.png';
import WeatherImg from '../assets/images/weather-web.png';
import MatlabImg from '../assets/images/matlab.png';
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
		framework: 'React Native | Redux | React Navigation',
		id: 'eqelonApp',
		img: EqelonImg,
		title: 'ËQELON APP',
		description:
			'Explore new opportunities, have access to details of your investment, and fund´s reports.',
		url: '#',
		ownership: 'private',
	},
	{
		framework: 'React | Redux',
		id: 'eqelonWeb',
		img: EqelonWebImg,
		title: 'ËQELON WEB',
		description:
			'Ëqelon is a real estate investment firm engaged in the ownership, acquisition, development, managment and disposition of hotels and multifamily properties',
		url: '#',
		ownership: 'private',
	},

	{
		framework: 'Matlab | Simulink | C++',
		id: 'matlab',
		img: MatlabImg,
		title: 'Matlab Projects',
		description: 'Page in progress...',
		url: '#',
		ownership: 'own',
	},
];
