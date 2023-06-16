import React from 'react';

const DisplayUVAText = (context) => {
	const { state, data: { type }} = context;

	return (
		<div className="display-text tt-post-single">
			<h1 className="spf-heading">Sunscreen SPF Meter</h1>
			<h6 className="spf-subheading">(Tap dial)</h6>
			<h2 className="spf-subheading">UVA Meter</h2>
			<h4>UVA PA {state[type].pf} indicates UVA protection
				{`${ state[type].joiningWord }`}
				<span className="protection newLine">{`${ state[type].protection }`}</span>
			</h4>
		</div>
	);
};

export default DisplayUVAText;
