// Libraries
import React, { Component } from 'react';
import { Provider } from 'react-redux';
import styled from 'styled-components';

// Redux
import { initStore, saveToLocalStorage } from './redux/store';

// Styles
import './styles.scss';

// Components
import Game from './game';
import Sidebar from './sidebar';

const Background = styled.div`
	width: 100vw;
	height: 100vh;

	display: flex;
	align-items: center;
	justify-content: center;

	overflow: hidden;
	
    background-color: #121212;
    transition: all 0.4s ease-out;
`;

const GameBox = styled.div`
    height: -moz-fit-content;
    height: fit-content;

	display: flex;

    filter: drop-shadow(0 0 1rem #eeeeee);
`;

export default class TileGame extends Component {

	constructor(props) {
		super(props);

		this.state = {
			...props
		}
		initStore(this.state.store);
		this.unsubscribe = this.state.store.subscribe(() =>
			saveToLocalStorage(this.state.store.getState()));
	}

	componentDidMount() {
	}

	componentWillUnmount() {
		this.unsubscribe();
	}

	render() {
		return (
			<div id="tilegame-page" style={{ position: "fixed" }}>
				<Background>
					<Provider store={this.state.store}>
						<GameBox>
							<Game />
							<Sidebar />
						</GameBox>
					</Provider>
				</Background>
			</div>
		);
	}
}

