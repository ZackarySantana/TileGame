// Libraries
import React, { useState } from "react";
import PropTypes from "prop-types";

// Redux
import { connect } from "react-redux";
import { newGame } from "../redux/actions";

// Styles
import "./styles.scss";

// Components

function Sidebar(props) {
	const [sliderValue, setSliderValue] = useState(4);

	return (
		<div id="sidebar">
			<div>
				<h2>Stats</h2>
				<hr />
				<p>'2x2' won = {props.gamesWon2}</p>
				<p>'4x4' won = {props.gamesWon4}</p>
				<p>'6x6' won = {props.gamesWon6}</p>
			</div>
			<div>
				<h2>Settings</h2>
				<hr />
				<div id="grid-size-slider-container">
					<input
						type="range"
						min="2"
						max="6"
						step="2"
						defaultValue="4"
						onChange={(event) => {
							setSliderValue(event.target.value);
						}}
					/>
					<p>{sliderValue}</p>
				</div>
				<button onClick={() => props.clickTile(sliderValue)}>
					Change grid side
				</button>
			</div>
		</div>
	);
}

const mapStateToProps = (state) => ({
	gamesWon2: state.stats.gamesWon2,
	gamesWon4: state.stats.gamesWon4,
	gamesWon6: state.stats.gamesWon6,
});

const mapDispatchToProps = (dispatch) => ({
	clickTile: (sliderValue) => {
		dispatch(newGame(sliderValue));
	},
});

Sidebar.propstypes = {
	gamesWon2: PropTypes.number,
	gamesWon4: PropTypes.number,
	gamesWon6: PropTypes.number,
};

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);
