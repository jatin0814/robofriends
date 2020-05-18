import React from 'react';
import './Card.css'
const Card = (props) => {
	return(
		<div className="bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
			<img alt="robo" src={`https://robohash.org/${props.id}`}/>
			<h2>{props.name}</h2>
			<p>{props.email}</p>
		</div>

	);
}

export default Card;