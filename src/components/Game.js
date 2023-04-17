import React, { useState, useEffect } from 'react';
import InputBox from './InputBox';
import CheckButton from './CheckButton';
import Feedback from './Feedback';
import DisplayWord from './DisplayWord';
import ScrambleManager from '../services/scramblerManager';
import NewGameButton from './NewGameButton';

const Game = (context) => {
	const [state, setState] = useState({ input: '',
		word: '',
		wordCheckPass: false, discountCode: 'Shop10123' });

	const extendedContext = { ...context, state, setState };

	useEffect(() => {
		ScrambleManager.createWord(extendedContext);
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return <div>
		<h2> Game</h2>
		<DisplayWord { ...extendedContext }/>
		<InputBox { ...extendedContext }/>
		<CheckButton { ...extendedContext }/>
		<Feedback { ...extendedContext }/>
		<NewGameButton { ...extendedContext }/>
	</div>;
};

export default Game;
