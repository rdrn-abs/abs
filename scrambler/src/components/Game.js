import React from 'react';
import Loading from './Loading';
import GameContent from './GameContent';

const Game = (context) => {
	const { state: { isLoading }} = context;
	const GameScreen = !isLoading ? GameContent : Loading;

	return <GameScreen { ...context }/>;
};

export default Game;
