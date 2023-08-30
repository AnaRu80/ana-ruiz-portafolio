import { NavBar } from '../features';

export const Layout = ({ children }: any) => {
	return (
		<div >
			<NavBar />
			{children}
		</div>
	);
};
