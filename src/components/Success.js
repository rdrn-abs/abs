import React from 'react';
import GameOverScreen from './GameOverScreen';
import ScrambleManager from '../services/scramblerManager';

const Success = (context) => {
	const { state } = context;
	const { wordObject: { word }, input } = state;

	return <div>
		{word
			? ScrambleManager.checkWord(word, input)
			&& <GameOverScreen { ...context }/>
			: <div/>}
	</div>;
};

export default Success;
