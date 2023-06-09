import React from 'react';

const Retry = ({ setState, seed: { initialState }}) =>
	<div className="retry-card">
		<div className="retry-title">You are almost there.</div>
		<button className="retry-btn" onClick={ () => setState(initialState) }>
			Retry
		</button>
	</div>
;

export default Retry;
