// Libraries
import React from 'react';

// Styles
import './styles.scss';
import Tiles from '../tiles';

// Components

export default function Game() {
	return (
		<div id="game">
			<h1>Tile Game</h1>
			<hr />
			<Tiles />
			<hr />
		</div>
	);
}
