import React from 'react';

const DisplayUVAText = (context) => {
	const { config: { pf, protection }} = context;

	return <div className="display-text tt-post-single">
		<h1 className="spf-heading">
			Sunscreen SPF Meter</h1>
		<h6 className="spf-subheading">(Tap dial)</h6>
		<h4 className="spf-subheading">UVA Meter</h4>
		<h2>  UVA PF {pf} indicates UVA protection of
			<span className="protection">
				{ ` ${ protection }` }
			</span> .
		</h2>

	</div>;
}	;

export default DisplayUVAText;
