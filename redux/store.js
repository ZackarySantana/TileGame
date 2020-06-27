// Redux
import { reset } from './actions';
import RootReducer from './rootreducer';

export function initStore(store) {
	store.replaceReducer(RootReducer);
	store.dispatch(reset(loadFromLocalState()));
}

export function saveToLocalStorage(state) {
	try {
		const serializedState = JSON.stringify(state.stats);
		localStorage.setItem('tilegame-data', serializedState);
	} catch (exception) {
		console.log(exception);
	}
}

function loadFromLocalState() {
	try {
		const serializedState = localStorage.getItem('tilegame-data');
		if (serializedState === null) return undefined;
		return { stats: JSON.parse(serializedState) };
	} catch (exception) {
		console.log(exception);
		return undefined;
	}
}
