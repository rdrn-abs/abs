import React from 'react';
import Loading from './Loading';
import GameContent from './GameContent';

const Game = (context) => {
	const { state: { isLoading }} = context;
	const Component = !isLoading ? GameContent : Loading;

	return <Component { ...context }/>;
};

export default Game;
