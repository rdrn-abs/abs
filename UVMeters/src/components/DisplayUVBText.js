import React from 'react';

const DisplayUVBText = (context) => {
	const { state, data: { type }} = context;

	return (
		<div className="display-text tt-post-single">
			<h4 className="spf-subheading">UVB Meter</h4>
			<h2>  SPF {state[type].spf} blocks
				<span className="protection">
					{ ` ${ state[type].protection }` }
				</span> of the UVB rays.
			</h2>
		</div>
	);
}	;

export default DisplayUVBText;
