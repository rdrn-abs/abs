import React from 'react';
import Discount from './Discount';
import ClickDiscount from './ClickDiscount';

const GameOverScreen = (context) =>
	<div>
		<ClickDiscount { ...context }/>
		<Discount { ...context }/>

	</div>;

export default GameOverScreen;
