//CRA Functional component version
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
			// init state
			monsters: [],
			searchField: '',
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
		// filters the initial state of monsters
		// if the filter case is true, it returns a new array that we map over
		// note:  when the "searchField" is empty, all items are true, so they get returned in the new array
		const filteredMonsters = this.state.monsters.filter((monster) => {
			return (
				monster.name
					// set data searched to lowercase
					.toLocaleLowerCase()
					// returns a new array based on the state of searchfield, will return any name thats included
					// that new array is what is being mapped over on the return
					.includes(this.state.searchField)
			);
		});

		return (
			<div className='App'>
				<input
					className='searchBox'
					type='search'
					placeholder='search monsters'
					onChange={(event) => {
						const searchField =
							//set search to lowercase
							event.target.value.toLocaleLowerCase();
						// sets the state of searchField every time the input value is changed
						this.setState(() => {
							return { searchField };
						});
					}}
				/>
				{/* returns a filtered list of objects to be mapped over and displayed based on the input values */}
				{filteredMonsters.map((monster) => {
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
