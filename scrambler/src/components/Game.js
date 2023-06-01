import React from 'react';
import InputBox from './InputBox';
import DisplayWord from './DisplayWord';

const Game = (context) => <div className="game-card">
	<h1 className="tt-description">
		Unscramble the word and claim your reward!
	</h1>
	<InputBox { ...context }/>
	<DisplayWord { ...context }/>
</div>;

export default Game;
