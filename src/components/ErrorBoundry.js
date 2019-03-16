import React from "react";

class ErrorBoundry extends React.Component {
	state ={
		hasError: false
	};

	componentDidCatch(error, info) {
		this.setState({ hasError: true });
	};

	render() {
		if (this.state.hasError) {
			return <h3>Uh oh! Something went wrong!</h3>
		}
		return this.props.children
	};
};

export default ErrorBoundry;