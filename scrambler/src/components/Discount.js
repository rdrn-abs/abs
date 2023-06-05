import React from 'react';

const Discount = (context) => {
	const { state: { discount: { data: { data }}}} = context;
	const { discountCodeBasicCreate: { codeDiscountNode: { codeDiscount:
		{ title, codes: { nodes }}}}} = data;
	const [first] = nodes;

	return <div className="game-card">
		<h3 className="discount-title">{title}</h3>
		<div>Use this coupon and claim your reward.</div>
		<div className="discount-code">{first.code}</div>
		<p>Valid for 24 hours.</p>
		<h4>Play more!! Come back tomorrow for the new discount.</h4>
	</div>;
};

export default Discount;
