import React from 'react';
import Game from './Game';
import ScramblerManager from '../services/scramblerManager';

const ScrambleGame = (context) => {
	const { setState, state } = context;

	setState({
		...state,
		wordObject: ScramblerManager.scrambleLetters(context),
	});

	return <Game { ...context }/>;
};

export default ScrambleGame;
