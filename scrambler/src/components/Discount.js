import { result } from '@laufire/utils/collection';
import React from 'react';

const Discount = (context) => {
	const {
		discountCodeBasicCreate,
		collectionUrl,
	} = result(context, 'state/discount/data');

	const {
		title,
		codes: { nodes },
	} = result(discountCodeBasicCreate, 'codeDiscountNode/codeDiscount');

	const [{ code }] = nodes;

	return <div className="game-card">
		<h3 className="discount-title">{title}</h3>
		<div>Use this coupon and claim your reward.</div>
		<div className="discount-code">{code}</div>
		<div><a href={ collectionUrl }>Check Discount products</a></div>
		<p>Valid for 24 hours.</p>
		<h4>Play more!! Come back tomorrow for the new discount.</h4>
	</div>;
};

export default Discount;
