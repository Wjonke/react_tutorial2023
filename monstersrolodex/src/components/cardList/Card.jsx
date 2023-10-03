import React, { Component } from 'react';

export default class MonsterCard extends Component {
	render() {
		const { monsterName } = this.props;
		return (
			<div>
				<h1>{monsterName}</h1>
			</div>
		);
	}
}
// {filteredMonsters.map((monster) => {
//     return (
//         <div key={monster.id}>
//             <h1>{monster.name}</h1>
//         </div>
//     );
// })}
