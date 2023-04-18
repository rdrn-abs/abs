import React from 'react';
import InputBox from './InputBox';
import DisplayWord from './DisplayWord';

const Game = (context) => <div>
	<h2> Game</h2>
	<DisplayWord { ...context }/>
	<InputBox { ...context }/>

</div>;

export default Game;
