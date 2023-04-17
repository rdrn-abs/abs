import React from 'react';
import ScramblerManager from '../services/scramblerManager';

const NewGameButton = (context) => {
	const { state: { wordCheckPass }} = context;

	return wordCheckPass
	&&	<button onClick={ () =>	ScramblerManager.createWord(context) }>
		Click for New Game
	</button>;
};

export default NewGameButton;
