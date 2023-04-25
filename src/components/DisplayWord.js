import React from 'react';

const DisplayWord = ({ state: { wordObject: { scrambledLetters }}}) =>
	<div className="display-word">
		<h2 className="tt-title">Unscramble the word and claim your reward!</h2>
		{scrambledLetters
			&& scrambledLetters.map((item, index) =>
				<span key={ index } className={ `tt-block-title ${ item.entered ? 'highlighted' : '' }` }>
					{item.letter.toUpperCase()}</span>)}
	</div>;

export default DisplayWord;
