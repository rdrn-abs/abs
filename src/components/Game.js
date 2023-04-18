import React from 'react';
import InputBox from './InputBox';
import DisplayWord from './DisplayWord';
import Success from './Success';

const Game = (context) => <div>
	<h2> Game</h2>
	<DisplayWord { ...context }/>
	<InputBox { ...context }/>
	<Success { ...context }/>

</div>;

export default Game;
