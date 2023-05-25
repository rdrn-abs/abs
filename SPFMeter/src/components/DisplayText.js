import React from 'react';
import SPFManager from '../services/SPFManager';

const DisplayText = (context) => {
	const { spf, protection } = SPFManager.findSegment(context);

	return <div className="display-text tt-post-single">
		<h1 className="spf-heading">
			Sun Protection Factor Meter</h1>
		<h6>(Click on the dial to find the SPF protection.)</h6>
		<h2>  SPF {spf} blocks
			<span className="protection">
				{ ` ${ protection }` }
			</span> of the UVB rays.
		</h2>

	</div>;
}	;

export default DisplayText;
