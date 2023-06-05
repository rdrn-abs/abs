import React from 'react';
import RedirectToHome from './RedirectToHome';

const VisitLater = (context) => {
	const { data: { value: { nextAvailableAt }}} = context;

	return <div className="visitLater">
		<p className="visitLater-title">
			Come back after <b style={ { color: '#ae9461' } }>
				{nextAvailableAt}</b> hours
		</p>
		<RedirectToHome { ...context }/>
	</div>;
};

export default VisitLater;
