import React from 'react';
import InputBox from './InputBox';
import DisplayWord from './DisplayWord';

const Game = (context) => <div className="game-card">
	<h1> What Am I?</h1>
	<InputBox { ...context }/>
	<DisplayWord { ...context }/>

</div>;

export default Game;
