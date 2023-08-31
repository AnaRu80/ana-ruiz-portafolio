import Navigation from './Navigation';
import { ThemeProvider } from './context/ThemeContext';
function App() {
	return (
		<ThemeProvider>
			<Navigation />
		</ThemeProvider>
	);
}

export default App;
