export const onSearchChange = (event) => {
	const searchField = event.target.value.toLocaleLowerCase();
	// sets the state of searchField every time the input value is changed
	this.setState(() => {
		return { searchField };
	});
};
