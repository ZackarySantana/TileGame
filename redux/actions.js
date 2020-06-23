export const RESET = "RESET";

export function reset(loadedState) {
	return {
		type: RESET,
		payload: {
			loadedState
		}
	}
}
