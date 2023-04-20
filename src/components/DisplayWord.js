import React from 'react';

const DisplayWord = ({ state: { wordObject: { scrambledLetters }}}) => <div>
	<h1 className="title">unscramble this and claim your reward</h1>
	{scrambledLetters
			&& scrambledLetters.map((item, index) =>
				<span key={ index } className={ `test-word ${ item.entered ? 'highlighted' : '' }` }>
					{item.letter.toUpperCase()}</span>)}
</div>;

export default DisplayWord;
