import React from 'react';
import InputBox from './InputBox';
import CheckButton from './CheckButton';
import DisplayWord from './DisplayWord';

const Game = (context) => <div>
	<h2> Game</h2>
	<DisplayWord { ...context }/>
	<InputBox { ...context }/>
	<CheckButton { ...context }/>

</div>;

export default Game;
