// Libraries
import React, { Component } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

// Redux
import { Provider } from "react-redux";
import { initStore, saveToLocalStorage } from "./redux/store";

// Styles
import "./styles.scss";

// Components
import Game from "./game";
import Sidebar from "./sidebar";
import Menu from "./menu";

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
	static propTypes = {
		store: PropTypes.object,
	};

	constructor(props) {
		super(props);

		this.state = {
			...props,
		};

		initStore(this.state.store);
	}

	componentDidMount() {
		this.unsubscribe = this.state.store.subscribe(() =>
			saveToLocalStorage(this.state.store.getState())
		);
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
							<Menu />
						</GameBox>
					</Provider>
				</Background>
			</div>
		);
	}
}
