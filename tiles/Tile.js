// Libraries
import React from "react";
import { CSSTransition } from "react-transition-group";

// Redux
import { connect } from "react-redux";
import { clickTile, unflick } from "../redux/actions";

// Components

function Tile(props) {
	return (
		<div>
			<button onClick={props.clickTile}>
				<CSSTransition
					in={!props.show && !props.flick}
					timeout={600}
					classNames="tile-transition"
					unmountOnExit
					appear
				>
					<svg viewBox="0 0 24 24">
						<path d="M23 12c0-3.037-1.232-5.789-3.222-7.778s-4.741-3.222-7.778-3.222-5.789 1.232-7.778 3.222-3.222 4.741-3.222 7.778 1.232 5.789 3.222 7.778 4.741 3.222 7.778 3.222 5.789-1.232 7.778-3.222 3.222-4.741 3.222-7.778zM21 12c0 2.486-1.006 4.734-2.636 6.364s-3.878 2.636-6.364 2.636-4.734-1.006-6.364-2.636-2.636-3.878-2.636-6.364 1.006-4.734 2.636-6.364 3.878-2.636 6.364-2.636 4.734 1.006 6.364 2.636 2.636 3.878 2.636 6.364zM10.033 9.332c0.183-0.521 0.559-0.918 1.022-1.14s1.007-0.267 1.528-0.083c0.458 0.161 0.819 0.47 1.050 0.859 0.183 0.307 0.284 0.665 0.286 1.037 0 0.155-0.039 0.309-0.117 0.464-0.080 0.16-0.203 0.325-0.368 0.49-0.709 0.709-1.831 1.092-1.831 1.092-0.524 0.175-0.807 0.741-0.632 1.265s0.741 0.807 1.265 0.632c0 0 1.544-0.506 2.613-1.575 0.279-0.279 0.545-0.614 0.743-1.010 0.2-0.4 0.328-0.858 0.328-1.369-0.004-0.731-0.204-1.437-0.567-2.049-0.463-0.778-1.19-1.402-2.105-1.724-1.042-0.366-2.135-0.275-3.057 0.167s-1.678 1.238-2.044 2.28c-0.184 0.521 0.090 1.092 0.611 1.275s1.092-0.091 1.275-0.611zM12 18c0.552 0 1-0.448 1-1s-0.448-1-1-1-1 0.448-1 1 0.448 1 1 1z"></path>
					</svg>
				</CSSTransition>

				<CSSTransition
					in={props.show || props.flick}
					timeout={600}
					classNames="tile-transition"
					unmountOnExit
					appear
				>
					<svg viewBox={props.svg.viewBox}>
						<path d={props.svg.path} />
					</svg>
				</CSSTransition>
			</button>
		</div>
	);
}

const mapStateToProps = (state, ownProps) => ({
	show: state.tiles[ownProps.id].clicked || state.tiles[ownProps.id].matched,
	flick: state.tiles[ownProps.id].flick,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
	clickTile: () => {
		dispatch(clickTile(ownProps.id));
		setTimeout(() => {
			dispatch(unflick(ownProps.id));
		}, 1300);
	},
});

export default connect(mapStateToProps, mapDispatchToProps)(Tile);
