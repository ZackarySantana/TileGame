// Libraries
import React, { Component } from 'react';
import { Provider } from 'react-redux';
import styled from 'styled-components';

// Redux
import { initStore, saveToLocalStorage } from './redux/store';

// Components


// Styles
import './styles.scss';

const Background = styled.div`
	width: 100vw;
	height: 100vh;

	display: flex;
	align-items: center;
	justify-content: center;
`;

const GameBox = styled.div`
	width: 80vw;
	height: 80vh;
	z-index: 1;

	background-color: black;
	border: 2px gray solid;
`;

export default class TileGame extends Component {

	constructor(props) {
		super(props);

		this.state = {
			...props
		}
	}

	componentDidMount() {
		initStore(this.state.store);
		this.unsubscribe = this.state.store.subscribe(() =>
			saveToLocalStorage(this.state.store.getState()));
	}

	componentWillUnmount() {
		this.unsubscribe();
	}

	render() {
		return (
			<div id="tilegame-page">
				<Background>
					<Provider store={this.state.store}>
						<GameBox>{/* Do game lol test */}</GameBox>
					</Provider>
				</Background>
			</div>
		);
	}
}

