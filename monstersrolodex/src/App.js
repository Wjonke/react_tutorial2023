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

import './App.css';

class App extends Component {
	// constructor runs first
	constructor() {
		super();

		//local state
		this.state = {
			// init state - monster array as empty
			monsters: [],
		};
	}

	//lifecycle methods
	//componentDidMount runs only once unless component unmounts
	// runs after render/mounting
	componentDidMount() {
		//fetches json data for users and sets state on render
		fetch('https://jsonplaceholder.typicode.com/users')
			.then((response) => response.json())
			.then((users) =>
				this.setState(
					() => {
						return { monsters: users };
					},
					//callback to clg current state
					() => {
						console.log(this.state);
					}
				)
			);
	}

	//render components, runs second after constructor, mounts component
	render() {
		return (
			<div className='App'>
				{this.state.monsters.map((monster) => {
					return (
						<div key={monster.id}>
							<h1>{monster.name}</h1>
						</div>
					);
				})}
			</div>
		);
	}
}

export default App;
