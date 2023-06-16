import React from 'react';

const DisplayUVAText = (context) => {
	const { state, data: { type }} = context;

	return (
		<div className="display-text tt-post-single">
			<h1 className="spf-heading">Sunscreen SPF Meter</h1>
			<h6 className="spf-subheading">(Tap dial)</h6>
			<h4 className="spf-subheading">UVA Meter</h4>
			<h2>UVA PF {state[type].pf} indicates UVA protection
				{`${ state[type].joiningWord }`}
				<span className="newLine">
					<span className="protection">{`${ state[type].protection }`}</span>
				</span>
			</h2>
		</div>
	);
};

export default DisplayUVAText;
