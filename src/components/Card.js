import React from "react";

const Card = ({ id, username, name, email }) => {

	return (
		<div className="bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5 tc" key={id}>
			<img src={`https://robohash.org/${id}?200x200`} alt={username} />
			<div>
				<h2>{name}</h2>
				<p>{email}</p>
			</div>
		</div>
	);
};

export default Card; 