import { map } from '@laufire/utils/collection';
import React from 'react';

const DisplayWord = ({
	state: {
		letters: { scrambledLetters },
	},
}) =>
	<div className="display-word">
		{map(scrambledLetters, ({ letter, entered }, index) =>
			<span key={ index } className={ `test-word ${ entered ? 'highlighted' : '' }` }>
				{letter.toUpperCase()}
			</span>)}
	</div>;

export default DisplayWord;
