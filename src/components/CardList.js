import React from "react";
import Card from "./Card";

const CardList = (props) => {

	return (
		props.robots.map(robot => {
			return (
				<Card {...robot} key={robot.id} />
			);
		})
	);
};

export default CardList;