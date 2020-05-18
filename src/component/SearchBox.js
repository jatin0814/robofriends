import React from 'react';

const SearchBox = ({SearchChange}) =>{
	return(
		<div className="pa3">
		<input 
		className="pa2 ba b--green bg-lightest-blue" 
		type="search"
		placeholder="search robot"
		onChange={SearchChange}
		/>
		</div>
	);
}
export default SearchBox;