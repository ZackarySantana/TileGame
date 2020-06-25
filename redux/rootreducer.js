// Actions
import * as Actions from './actions';
import { generateTiles } from './generator';

const initialState = {
	tiles: generateTiles(4),
	size: 4,
	slider: 4,
	currentTile: -1,
	stats: {
		gamesWon2: 0,
		gamesWon4: 0,
		gamesWon6: 0
	},
	gameComplete: false
}

export default function reduce(state = initialState, action) {
	const newState = {
		...initialState,
		...state
	};
	switch (action.type) {
		case Actions.CLICK_TILE:
			return clickTile(newState, action.payload);
		case Actions.NEW_GAME:
			return newGame(newState, action.payload);
		case Actions.RESET:
			return Object.assign({}, initialState,
				action.payload.loadedState ? action.payload.loadedState : {});
		case "@@INIT":
			return initialState;
		default:
			return newState;
	}
}

function clickTile(state, payload) {


	return state;
}

function newGame(state, payload) {


	return state;
}
