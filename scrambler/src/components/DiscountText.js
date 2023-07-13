import React, { useRef } from 'react';

const copyDiscount = async (ref) => {
	const copyText = ref.current.textContent;

	await navigator.clipboard.writeText(copyText);
};

const DiscountText = (context) => {
	const {	state: { scrambler: { data }}} = context;
	const { discount: {	code, title, collectionUrl }}	= data;
	const ref = useRef(null);

	return (
		<div>
			<h3 className="discount-title">{title}</h3>
			<div>Use this discount code and claim your reward.</div>
			<div ref={ ref } className="discount-code">{code}</div>
			<div><a href={ collectionUrl } className="discount-collection">
				Click here to see the Discounted products.
			</a>
			</div>
			<button
				onClick={ () => copyDiscount(ref) }
				className="retry-btn"
			>Copy</button>
		</div>
	);
};

export default DiscountText;
