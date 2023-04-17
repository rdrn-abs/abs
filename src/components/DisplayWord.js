import React from 'react';
import ScrambleManager from '../services/scramblerManager';

const DisplayWord = (context) => {
	const { state: { word }} = context;

	const scrambledWord = ScrambleManager.scramble(word);

	return <div>
		<h2>{scrambledWord.toUpperCase()}</h2>
	</div>;
};

export default DisplayWord;
