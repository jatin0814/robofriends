import React , {Component} from 'react';
import CardList from '../component/CardList';
import SearchBox from '../component/SearchBox';
import Scroll from '../component/scroll';
import ErrorBoundry from '../component/ErrorBoundry';
import './app.css'
class App extends Component{
	constructor(){
		super()
		this.state = {
		robots: [],
		searchfiled: ''
	}
	}

	componentDidMount(){
		fetch('https://jsonplaceholder.typicode.com/users')
		.then(response=>response.json())
		.then(users=>{this.setState({robots: users})})
	}
	onsearchchange = (event) => {
		this.setState({searchfiled:event.target.value})
	}

	
	render(){
		const robotfilter = this.state.robots.filter(robots =>{
		return robots.name.toLowerCase().includes(this.state.searchfiled.toLowerCase());
		});
		if(this.state.robots.length === 0){
			return <h1 className='loading'>LOADING PLEASE WAIT</h1>
		}
		return(
		<div className="tc">
		<h1 className="f1">RoboFriends</h1>
		<SearchBox SearchChange={this.onsearchchange}/>
		<Scroll>
			<ErrorBoundry>
				<CardList robots={robotfilter}/>
			</ErrorBoundry>
		</Scroll>
		</div>
	);
	}
}
export default App;