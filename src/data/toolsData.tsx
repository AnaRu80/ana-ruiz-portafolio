import { toolsDataInterface } from './interfaces';
import { BiLogoVisualStudio, BiLogoGit, BiLogoChrome } from 'react-icons/bi';
import { FaNpm, FaJira, FaTrello, FaSlack, FaFigma, FaBootstrap, FaAndroid } from 'react-icons/fa';
import { SiPostman, SiNotion, SiMaterialdesign, SiWebpack, SiEslint, SiPrettier, SiFirebase, SiNetlify, SiXcode, SiHeroku, SiCircuitverse } from 'react-icons/si';
import { BsGithub } from 'react-icons/bs';

export const toolsData: toolsDataInterface[] = [
	{ id: 1, name: 'Visual Studio Code', icon: <BiLogoVisualStudio /> },
	{ id: 2, name: 'Git', icon: <BiLogoGit /> },
	{ id: 3, name: 'Chrome DevTools', icon: <BiLogoChrome /> },
	{ id: 4, name: 'Npm', icon: <FaNpm /> },
	{ id: 8, name: 'Heroku', icon: <SiHeroku /> },
	{ id: 9, name: 'Postman', icon: <SiPostman /> },
	{ id: 10, name: 'GitHub', icon: <BsGithub /> },
	{ id: 12, name: 'JIRA', icon: <FaJira /> },
	{ id: 12, name: 'MATLAB', icon: <SiCircuitverse /> },
	{ id: 13, name: 'Trello', icon: <FaTrello /> },
	{ id: 14, name: 'Slack', icon: <FaSlack /> },
	{ id: 15, name: 'Notion', icon: <SiNotion /> },
	{ id: 16, name: 'Figma', icon: <FaFigma /> },
	{ id: 18, name: 'Bootstrap', icon: <FaBootstrap /> },
	{ id: 19, name: 'Material-UI', icon: <SiMaterialdesign /> },
	{ id: 20, name: 'Webpawebck', icon: <SiWebpack /> },
	{ id: 21, name: 'ESLint', icon: <SiEslint /> },
	{ id: 22, name: 'Prettier', icon: <SiPrettier /> },
	{ id: 24, name: 'Firebase', icon: <SiFirebase /> },
	{ id: 25, name: 'Netlify', icon: <SiNetlify /> },
	{ id: 28, name: 'Xcode', icon: <SiXcode /> },
	{ id: 29, name: 'Android Studio', icon: <FaAndroid /> },
];
