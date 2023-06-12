import React from 'react';

const DisplayWord = ({ state: { letters: { scrambledLetters }}}) =>
	<div className="display-word">
		{scrambledLetters
			&& scrambledLetters.map((item, index) =>
				<span key={ index } className={ `test-word ${ item.entered ? 'highlighted' : '' }` }>
					{item.letter.toUpperCase()}</span>)}
	</div>;

export default DisplayWord;
