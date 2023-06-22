import React from 'react';
import RedirectToHome from './RedirectToHome';

const VisitLater = (context) => {
	const { state: { scrambler: { error: { nextAvailableAt }}}} = context;

	return (
		<div className="visitLater-card">
			<p className="visitLater-title">
				You&apos;ve conquered the scramble challenge!
				Take a breather and prepare for another thrilling
				scramble session in just <b className="visitLater-hours">
					{nextAvailableAt}
				</b> hours!
			</p>
			<RedirectToHome { ...context }/>
		</div>
	);
};

export default VisitLater;
