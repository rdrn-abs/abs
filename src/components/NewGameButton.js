import React from 'react';
import ScramblerManager from '../services/scramblerManager';

const NewGameButton = (context) =>
	<button onClick={ () =>	ScramblerManager.createWord(context) }>
		Click for New Game
	</button>;

export default NewGameButton;
