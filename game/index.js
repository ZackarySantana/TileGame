// Libraries
import React from 'react';

// Styles
import './styles.scss';

// Components

export default function Game(props) {
	return (
		<div id="game">
			<h1>Tile Game</h1>
			<hr />
			<div
				id="tiles-container"
				styles={"grid-template-columns: repeat(" + props.size + ", 1fr);"}>

			</div>
			<hr />
		</div>
	);
}
