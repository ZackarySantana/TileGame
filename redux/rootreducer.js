// Actions
import * as Actions from './actions';

const initialState = {
	test: 1000
}

export default function reduce(state = initialState, action) {
	const newState = {
		...initialState,
		...state
	};
	switch (action.type) {
		case Actions.RESET:
			return Object.assign({},
				action.payload.loadedState ? action.payload.loadedState : initialState);
		default:
			return newState;
	}
}
