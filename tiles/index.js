// Libraries
import React from 'react';
import PropTypes from 'prop-types';

// Redux
import { connect } from 'react-redux';

// Styles
import './styles.scss';

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
	size: state.size
});

Tiles.propstypes = {
	tiles: PropTypes.arrayOf(PropTypes.objectOf({
		pair: PropTypes.number,
		clicked: PropTypes.bool,
		matched: PropTypes.bool,
		flick: PropTypes.bool,
		viewBox: PropTypes.string,
		path: PropTypes.string
	})),
	size: PropTypes.number.isRequired
}

export default connect(mapStateToProps)(Tiles);
