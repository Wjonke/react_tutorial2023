import { Component } from 'react';
import CardList from './components/cardList/CardList';
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
				this.setState(() => {
					return { monsters: users };
				})
			);
	}

	onSearchChange = (event) => {
		const searchField = event.target.value.toLocaleLowerCase();
		// sets the state of searchField every time the input value is changed
		this.setState(() => {
			return { searchField };
		});
	};

	//render components, runs second after constructor, mounts component
	render() {
		const { monsters, searchField } = this.state;
		const { onSearchChange } = this;

		const filteredMonsters = monsters.filter((monster) => {
			return monster.name
				.toLocaleLowerCase()

				.includes(searchField);
		});

		return (
			<div className='App'>
				<input
					className='searchBox'
					type='search'
					placeholder='search monsters'
					onChange={onSearchChange}
				/>

				<CardList monsters={filteredMonsters} />
			</div>
		);
	}
}

export default App;
