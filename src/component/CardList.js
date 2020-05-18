//Return cardlist
//render card
import React from 'react';
import Card from './Card';
//CardList is parent component of Card 
const CardList = ({ robots }) =>{
	const cardcomponent = robots.map((user,i)=>{
		return <Card id={robots[i].id} name={robots[i].name} email={robots[i].email}/>
	});
	return(
		<div>
	 		{cardcomponent}
		</div>
	);
} 

export default CardList;