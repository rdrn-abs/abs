import React from 'react';
import RedirectToHome from './RedirectToHome';

const VisitLater = (context) =>
	<div className="visitLater-card">
		<p className="visitLater-title">
			Master the scramble, but heed the rule of three -
			tomorrow holds fresh chances for you to reign supreme!
		</p>
		<RedirectToHome { ...context }/>
	</div>
	;

export default VisitLater;
