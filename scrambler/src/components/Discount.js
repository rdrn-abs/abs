/* eslint-disable max-lines-per-function */
import React, { useRef } from 'react';

const copyDiscount = async (ref) => {
	const copyText = ref.current.textContent;

	await navigator.clipboard.writeText(copyText);
};

const Discount = (context) => {
	const {
		state: { scrambler, discount },
	} = context;
	const { discount: { timeLeft,	code, title, collectionUrl }}
	= discount?.data || scrambler.data;
	const ref = useRef(null);

	return (
		<div className="game-card">
			<h3 className="discount-title">{title}</h3>
			<div>Use this discount code and claim your reward.</div>
			<div ref={ ref } className="discount-code">{code}</div>
			<div><a href={ collectionUrl } className="discount-collection">
				Click here to see the Discounted products
			</a>
			</div>
			<p>Valid for {`${ timeLeft.hours }:${ timeLeft.minutes }:${ timeLeft.seconds } `}.</p>
			<button
				onClick={ () => copyDiscount(ref) }
				className="retry-btn"
			>Copy</button>
		</div>
	);
};

export default Discount;
