import { FooterFeature, NavBar } from '../features';

export const Layout = ({ children }: any) => {
	return (
		<div className="flex flex-col min-h-screen">
			<NavBar />
			<div className="flex-grow">{children}</div>
			<FooterFeature />
		</div>
	);
};
