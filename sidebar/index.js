// Libraries
import React from 'react';

// Styles
import './styles.scss';

// Components

export default function Sidebar() {
	return (
		<div id="sidebar">
			<div>
				<h2>Stats</h2>
				<hr />
				<p>
					Games won on '2x2' = 0
				</p>
				<p>
					Games won on '4x4' = 0
				</p>
				<p>
					Games won on '6x6' = 0
				</p>
			</div>
			<div>
				<h2>Settings</h2>
				<hr />
				<div id="grid-size-slider-container">
					<input type="range" min="2" max="6" step="2" defaultValue="4" />
					<p>4</p>
				</div>
				<button>
					Change grid side
				</button>
			</div>
		</div >
	);
}
