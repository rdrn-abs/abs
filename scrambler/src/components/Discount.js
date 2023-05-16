
import React from 'react';
const Discount = (context) => {
	const { config: { discountCode }} = context;

	return <div className="game-card">
		<div>Use this coupon and claim your reward.</div>
		<div className="discount-code">{discountCode}</div>
		<p>Valid for 24 hours.</p>
		<h4>Play more!! Come back tomorrow for the new discount.</h4>

	</div>;
};

export default Discount;
