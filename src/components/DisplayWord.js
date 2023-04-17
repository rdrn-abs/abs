import React from 'react';
import ScrambleManager from '../services/scramblerManager';

const DisplayWord = (context) => {
	const scrambledWord = ScrambleManager.scramble(context);

	return <div>
		<h2>{scrambledWord.toUpperCase()}</h2>
	</div>;
};

export default DisplayWord;
