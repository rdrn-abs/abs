import React from 'react';
import Discount from './Discount';
import NewGameButton from './NewGameButton';

const GameOverScreen = (context) =>
	<div>
		<Discount { ...context }/>
		<NewGameButton { ...context }/>
	</div>;

export default GameOverScreen;
