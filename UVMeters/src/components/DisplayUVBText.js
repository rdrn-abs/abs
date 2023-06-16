import React from 'react';

const DisplayUVBText = (context) => {
	const { state, data: { type }} = context;

	return (
		<div className="display-text tt-post-single">
			<h2 className="spf-subheading">UVB Meter</h2>
			<h4>  SPF {state[type].spf} blocks
				<span className="protection">
					{ ` ${ state[type].protection }` }
				</span> of the UVB rays.
			</h4>
		</div>
	);
}	;

export default DisplayUVBText;
