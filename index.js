// Libraries
import React from 'react';
import { Provider } from 'react-redux';
import styled from 'styled-components';

// Redux
import store from './redux/store';

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

export default function tilegame(props) {
	console.log(props)
	return (
		<div id="tilegame-page">
			<Background>
				<GameBox>{/* Do game lol test */}</GameBox>
			</Background>
		</div>
	);
}
