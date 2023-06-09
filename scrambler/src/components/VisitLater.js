import React from 'react';
import RedirectToHome from './RedirectToHome';

const VisitLater = (context) => {
	const {
		data: {
			value: { nextAvailableAt },
		},
	} = context;

	return (
		<div className="visitLater-card">
			<p className="visitLater-title">
				Come back after <b className="visitLater-hours">
					{nextAvailableAt}
				</b> hours
			</p>
			<RedirectToHome { ...context }/>
		</div>
	);
};

export default VisitLater;
