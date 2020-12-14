import React from "react";
import { withRouter } from "react-router";

function Menu(props) {
	const { history } = props;

	return (
		<div id="menu">
			<button
				onClick={(event) => {
					history.push("/animalcollector");
				}}
			>
				Animal Collector
			</button>
			<button
				onClick={(event) => {
					history.push("/rpg");
				}}
			>
				RPG
			</button>
			<button
				onClick={(event) => {
					history.push("/");
				}}
			>
				Back
			</button>
		</div>
	);
}

export default withRouter(Menu);
