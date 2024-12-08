import logo from './logo.svg'; //императивный
import './App.css'; //императивный
//декларативный
export const App = () => {
	//императивный
	return (
		//императивный
		//все что внутри return деклоративный
		<div className="App">
			<header className="App-header">
				<img
					src={logo}
					className="App-logo"
					alt="logo"
				/>
				<p>
					Edit <code>src/App.js</code> and save to reload 2.
				</p>
				<a
					className="App-link"
					href="https://reactjs.org"
					target="_blank"
					rel="noopener noreferrer"
				>
					Learn React
				</a>
				<p>{new Date().getFullYear()}</p>
			</header>
		</div>
	);
};
