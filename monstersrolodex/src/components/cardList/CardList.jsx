import React, { Component } from 'react';
import Card from './Card';
class CardList extends Component {
	render() {
		const { monsters } = this.props;

		return (
			<>
				{monsters.map((monster) => {
					return <Card key={monster.id} monsterName={monster.name} />;
				})}
			</>
		);
	}
}

export default CardList;
