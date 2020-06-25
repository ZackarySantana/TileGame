export const CLICK_TILE = "CLICK_TILE";
export const UNFLICK = "UNFLICK";
export const NEW_GAME = "NEW_GAME";

export function clickTile(index) {
	return {
		type: CLICK_TILE,
		payload: {
			index
		}
	}
}

export function unflick(index) {
	return {
		type: UNFLICK,
		payload: {
			index
		}
	}
}

export function newGame() {
	return {
		type: NEW_GAME
	}
}



export const RESET = "RESET";

export function reset(loadedState) {
	return {
		type: RESET,
		payload: {
			loadedState
		}
	}
}
