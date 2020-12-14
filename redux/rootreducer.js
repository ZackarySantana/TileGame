// Actions
import * as Actions from "./actions";
import { generateTiles } from "./generator";

const initialState = {
	tiles: generateTiles(4),
	size: 4,
	currentTile: -1,
	lastFlick: -1,
	stats: {
		gamesWon2: 0,
		gamesWon4: 0,
		gamesWon6: 0,
	},
	gameComplete: false,
};

export default function reduce(state = initialState, action) {
	const newState = {
		...initialState,
		...state,
	};
	switch (action.type) {
		case Actions.CLICK_TILE:
			return clickTile(newState, action.payload);
		case Actions.UNFLICK:
			return unflick(newState, action.payload);
		case Actions.NEW_GAME:
			return newGame(newState, action.payload);
		case Actions.RESET:
			return Object.assign(
				{},
				initialState,
				action.payload.loadedState ? action.payload.loadedState : {}
			);
		case "@@INIT":
			return initialState;
		default:
			return newState;
	}
}

let lock = false;

function clickTile(state, payload) {
	if (!state.gameComplete && !lock && !state.tiles[payload.index].matched) {
		// Clicked a not matched tile
		if (state.currentTile === -1) {
			// The first click in a pair
			state.tiles[payload.index].clicked = true;
			state.currentTile = payload.index;
		} else if (state.currentTile !== payload.index) {
			// Not clicking the same tile
			if (state.tiles[state.currentTile].pair === payload.index) {
				// Found matching pair
				state.tiles[state.currentTile].clicked = false;
				state.tiles[state.currentTile].matched = true;
				state.tiles[payload.index].matched = true;
				state.currentTile = -1;
			} else {
				// Failed pair
				lock = true;
				state.tiles[payload.index].flick = true;
				state.lastFlick = payload.index;
			}
		}
	}
	return state;
}

function unflick(state, payload) {
	if (!state.gameComplete) {
		if (lock && state.lastFlick === payload.index) {
			state.tiles[state.currentTile].clicked = false;
			state.tiles[state.lastFlick].flick = false;
			state.lastFlick = -1;
			state.currentTile = -1;
			lock = false;
		}
		let pass = true;
		for (const tile in state.tiles) {
			if (!state.tiles[tile].matched) {
				pass = false;
				console.log(tile);
			}
		}
		if (pass) {
			state.gameComplete = true;
			state.stats["gamesWon" + state.size] =
				state.stats["gamesWon" + state.size] + 1;
		}
	}
	return state;
}

function newGame(state, payload) {
	state.tiles = generateTiles(payload.newSize);
	state.size = payload.newSize;
	state.currentTile = -1;
	state.lastFlick = -1;
	state.gameComplete = false;
	lock = false;

	return state;
}
