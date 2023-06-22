import React from 'react';

const Retry = ({ setState, seed: { initialState }}) =>
	<div className="retry-card">
		<div className="retry-title">
			Ready to retry? Unleash your potential and seize the ultimate win!
		</div>
		<button className="retry-btn" onClick={ () => setState(initialState) }>
			Retry
		</button>
	</div>
;

export default Retry;
