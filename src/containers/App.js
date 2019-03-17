import React from "react";
import { connect } from "react-redux";
import Title from "../components/Title";
import SearchBox from "../components/SearchBox";
import Scroll from "../components/Scroll";
import CardList from "../components/CardList";
import ErrorBoundry from "../components/ErrorBoundry";
import "./App.css";

import { setSearchField, requestRobots } from "../actions";

const mapStateToProps = state => {
	return {
		search: state.searchRobots.search,
		robots: state.requestRobots.robots,
		isPending: state.requestRobots.isPending,
		error: state.requestRobots.error
	};
};

const mapDispatchToProps = dispatch => {
	return {
		handleInput: (event) => dispatch(setSearchField(event.target.value)),
		onRequestRobots: () => dispatch(requestRobots())
	};
};

class App extends React.Component {

	componentDidMount() {
		this.props.onRequestRobots();
	};

	render() {

		let { search, handleInput, robots, isPending } = this.props;
		let roboFilter = robots.filter(robot => robot.name.toLowerCase().includes(search.toLowerCase()));

		return isPending ?
		
		<h1 className="tc f1">Loading...</h1> :

		(
			<div className="tc">
				<Title />
				<SearchBox handleInput={handleInput} />
				<Scroll>
					<ErrorBoundry>
						<CardList robots={roboFilter} />
					</ErrorBoundry>
				</Scroll>
			</div>
		);	
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(App);