import React, { useState } from 'react';
import InputBox from './InputBox';
import CheckButton from './CheckButton';
import Feedback from './Feedback';
import DisplayWord from './DisplayWord';
import { rndValue } from '@laufire/utils/random';

const Game = (context) => {
	const { config: { wordList }} = context;
	const [state, setState] = useState({ input: '',
		word: rndValue(wordList),
		wordCheckPass: false, discountCode: 'Shop10123' });

	const extendedContext = { ...context, state, setState };

	return <div>
		<h2> Game</h2>
		<DisplayWord { ...extendedContext }/>
		<InputBox { ...extendedContext }/>
		<CheckButton { ...extendedContext }/>
		<Feedback { ...extendedContext }/>

	</div>;
};

export default Game;
