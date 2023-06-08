import React from 'react';

const DisplayUVBText = (context) => {
	const { config: { spf, protection }} = context;
	const text = ' SPF protection.)';

	return <div className="display-text tt-post-single">

		<h4 className="spf-subheading">UVB Meter</h4>
		<h2>  SPF {spf} blocks
			<span className="protection">
				{ ` ${ protection }` }
			</span> of the UVB rays.
		</h2>

	</div>;
}	;

export default DisplayUVBText;
