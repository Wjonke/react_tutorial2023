import React, { Component } from 'react';

class SearchBar extends Component {
	render() {
		const { placeHolder, onChangeHandler, className } = this.props;
		return (
			<input
				className={className}
				type='search'
				placeholder={placeHolder}
				onChange={onChangeHandler}
			/>
		);
	}
}

export default SearchBar;
