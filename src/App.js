import React from "react";
import Title from "./Title";
import SearchBox from "./SearchBox";
import CardList from "./CardList";
import robots from "./robots";

class App extends React.Component {

	state = {
		robots: robots,
		search: ""
	}

	handleInput = (event) => {
		this.setState({search: event.target.value});
	};

	render() {

		let roboFilter = this.state.robots.filter(robot => robot.name.toLowerCase().includes(this.state.search.toLowerCase()));

		return (
			<div className="tc">
				<Title />
				<SearchBox handleInput={this.handleInput} />
				<CardList robots={roboFilter} />
			</div>
		);
	}
}

export default App;