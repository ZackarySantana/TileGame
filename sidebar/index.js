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
					'2x2' won = 0
				</p>
				<p>
					'4x4' won = 0
				</p>
				<p>
					'6x6' won = 0
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
