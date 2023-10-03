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
