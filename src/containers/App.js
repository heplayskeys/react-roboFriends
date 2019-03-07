import React from "react";
import Title from "../components/Title";
import SearchBox from "../components/SearchBox";
import Scroll from "../components/Scroll";
import CardList from "../components/CardList";
import "./App.css";

class App extends React.Component {

	state = {
		robots: [],
		search: ""
	}

	componentDidMount() {
		fetch("https://jsonplaceholder.typicode.com/users")
		.then(res => res.json())
		.then(users => this.setState({robots: users}));
	}

	handleInput = (event) => {
		this.setState({search: event.target.value});
	};

	render() {

		let { robots, search } = this.state;

		let roboFilter = robots.filter(robot => robot.name.toLowerCase().includes(search.toLowerCase()));

		return !robots.length ?
		
		<h1 className="tc f1">Loading...</h1> :

		(
			<div className="tc">
				<Title />
				<SearchBox handleInput={this.handleInput} />
				<Scroll>
					<CardList robots={roboFilter} />
				</Scroll>
			</div>
		);	
	}
};

export default App;