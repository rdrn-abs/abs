import React, { useRef } from 'react';
import RedirectToHome from './RedirectToHome';
import { peek } from '@laufire/utils/debug';

const win = `You've conquered the scramble challenge!
Take a breather and prepare for another thrilling scramble session in just`;

const lose = `Master the scramble, but heed the rule of three -
tomorrow holds fresh chances for you to reign supreme!`;

const messages = {
	win,
	lose,
};

const copyDiscount = async (ref) => {
	const copyText = ref.current.textContent;

	await navigator.clipboard.writeText(copyText)
		.catch(() => peek('error'));
};

const VisitLater = (context) => {
	const { state: { scrambler: { error: { nextAvailableAt, code }}}} = context;
	const ref = useRef(null);

	return (
		<div className="visitLater-card">
			<p className="visitLater-title">
				{messages[code]}
				<b className="visitLater-hours">{nextAvailableAt}</b> hours!
			</p>
			<h1>DiscountCode</h1>
			<button onClick={ () => copyDiscount(ref) }>Copy</button>
			<RedirectToHome { ...context }/>
		</div>
	);
};

export default VisitLater;
