import React from 'react';
import './scroll.css';
const Scroll = (props) =>{
	return(
		<div className='scroll' style={{overflowY:'auto',border:'2px solid black',height:'500px'}}>
		{props.children}
		</div>
	)
}
export default Scroll;

