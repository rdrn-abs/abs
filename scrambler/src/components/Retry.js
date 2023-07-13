import React from 'react';

const Retry = (context) => {
	const { setState, seed: { initialState },
		state: { scrambler: { error: { remainingChances }}}} = context;

	return (
		<div className="retry-card">
			<div className="retry-title">Ready to retry?
				Unleash your potential and seize the ultimate win!
			</div>
			<div>You have remaining { remainingChances }
				{remainingChances === 1 ? ' chance' : ' chances'} </div>
			<button
				className="retry-btn"
				onClick={ () => setState(initialState) }
			>
				Retry
			</button>
		</div>
	);
};

export default Retry;
