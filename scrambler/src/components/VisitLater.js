import React, { useRef } from 'react';
import RedirectToHome from './RedirectToHome';

const copyDiscount = async (ref) => {
	const copyText = ref.current.textContent;

	await navigator.clipboard.writeText(copyText);
};

const win = (context) => {
	const {
		state: { scrambler: { error: { nextAvailableAt, discountCode }}},
		data: { ref },
	} = context;

	return (
		<div>
			<p className="visitLater-title">
				You&apos;ve conquered the scramble challenge! Take a breather
				and prepare for another thrilling scramble session in
				just <b className="visitLater-hours">{nextAvailableAt}</b> hour!

			</p>
			<h1 ref={ ref }>{discountCode}</h1>
			<button
				onClick={ () => copyDiscount(ref) }
				className="retry-btn"
			>Copy</button>
		</div>
	);
};

const lose = () =>
	<p className="visitLater-title">
		Master the scramble, but heed the rule of three - tomorrow holds fresh
		chances for you to reign supreme!
	</p>
;

const messages = {
	win,
	lose,
};

const VisitLater = (context) => {
	const {
		state: { scrambler, discount },
	} = context;
	const ref = useRef(null);
	const { code } = scrambler?.error || discount.error;

	return (
		<div className="visitLater-card">
			{messages[code]({
				...context,
				data: { ref },
			})}
			<RedirectToHome { ...context }/>
		</div>
	);
};

export default VisitLater;
