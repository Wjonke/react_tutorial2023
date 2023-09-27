//Functional component version
// import logo from './logo.svg';
// import './App.css';

// function App() {
// 	return (
// 		<div className='App'>
// 			<header className='App-header'>
// 				<img src={logo} className='App-logo' alt='logo' />
// 				<p>
// 					Edit <code>src/App.js</code> and save to reload.
// 				</p>
// 				<a
// 					className='App-link'
// 					href='https://reactjs.org'
// 					target='_blank'
// 					rel='noopener noreferrer'
// 				>
// 					Learn React
// 				</a>
// 			</header>
// 		</div>
// 	);
// }

// export default App;
// class component version

import { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
	constructor() {
		super();

		//local state
		this.state = {
			monsters: [
				{ name: 'Linda' },
				{ name: 'Frank' },
				{ name: 'Jacky' },
				{ name: 'Jose' },
			],
		};
	}

	render() {
		return (
			<div className='App'>
				{this.state.monsters.map((monster, i) => {
					return (
						<div key={i}>
							<h1>{monster.name}</h1>
						</div>
					);
				})}
			</div>
		);
	}
}

export default App;
