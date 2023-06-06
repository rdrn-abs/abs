import React from 'react';
import InputBox from './InputBox';
import DisplayWord from './DisplayWord';
import Loading from './Loading';

const Game = (context) => {
	const { state: { isLoading }} = context;

	return !isLoading
		? <div className="game-card">
			<h1 className="tt-description">
				Unscramble the word and claim your reward!
			</h1>
			<InputBox { ...context }/>
			<DisplayWord { ...context }/>
		</div>
		: <Loading { ...context }/>;
};

export default Game;
