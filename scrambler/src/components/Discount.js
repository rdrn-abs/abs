import React from 'react';
import CountDownTimer from './CountDownTimer';
import DiscountText from './DiscountText';

const Discount = (context) =>
	<div className="game-card">
		<DiscountText { ...context }/>
		<CountDownTimer { ...context }/>
	</div>;

export default Discount;
