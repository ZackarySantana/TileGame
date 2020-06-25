// Libraries
import React from 'react';

// Redux
import { connect } from 'react-redux';

// Styles
//import './styles.scss';

// Components
import Tile from './Tile';

function Tiles(props) {
	return (
		<div
			id="tiles-container"
			style={{ gridTemplateColumns: "repeat(" + props.size + ", 1fr)" }}>
			{
				Object.keys(props.tiles).map(key => (
					<Tile key={parseInt(key)} id={parseInt(key)} svg={{
						viewBox: props.tiles[key].viewBox,
						path: props.tiles[key].path
					}} />
				))
			}
		</div>
	);
}

const mapStateToProps = state => ({
	tiles: state.tiles,
	size: state.size,
	slider: state.slider
});

export default connect(mapStateToProps)(Tiles);
