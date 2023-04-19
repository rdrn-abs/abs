import React from 'react';

const DisplayWord = ({ state: { wordObject: { scrambledLetters }}}) => <div>

	{scrambledLetters
			&& scrambledLetters.map((item, index) =>
				<span key={ index } className={ `test-word${ item.entered ? 'highlighted' : '' }` }>
					{item.letter.toUpperCase()}</span>)}
</div>;

export default DisplayWord;
