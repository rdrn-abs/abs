import React from 'react';
import Loading from './Loading';
import GameContent from './GameContent';

const Game = (context) => {
	const { state: { isLoading }} = context;

	return !isLoading
		? <GameContent { ...context }/>
		: <Loading { ...context }/>;
};

export default Game;
