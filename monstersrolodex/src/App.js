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
			name: { firstName: 'Wes', lastName: 'Jonke' },
			company: 'Self Employed Boi',
		};
	}

	render() {
		return (
			<div className='App'>
				<header className='App-header'>
					<img src={logo} className='App-logo' alt='logo' />
					<p>
						Hello my name is {this.state.name.firstName}{' '}
						{this.state.name.lastName}, I work at{' '}
						{this.state.company}
					</p>
					<button
						onClick={() => {
							//adding dynamic name change functionality with callbacks to log current state
							this.state.name.firstName === 'Wes'
								? this.setState(
										() => {
											return {
												name: {
													firstName: 'Gunbunny',
													lastName: 'Redleg',
												},
											};
										},
										() => {
											console.log(this.state);
										}
								  )
								: this.setState(
										() => {
											return {
												name: {
													firstName: 'Wes',
													lastName: 'Jonke',
												},
											};
										},
										() => {
											console.log(this.state);
										}
								  );
						}}
					>
						Change Name
					</button>
				</header>
			</div>
		);
	}
}

export default App;
