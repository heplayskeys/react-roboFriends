import React from "react";

const Scroll = (props) => {

	return (
		<div style={{overflowY: "scroll", borderTop: "1px solid black", height: "800px", WebkitOverflowScrolling: "touch"}}>
			{props.children}
		</div>
	);
};

export default Scroll;