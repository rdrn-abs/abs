import React from 'react';
import SPFManager from '../services/SPFManager';

const DisplayText = (context) => {
	const { spf, protection } = SPFManager.findSegment(context);
	const text = ' SPF protection.)';

	return <div className="display-text tt-post-single">
		<h1 className="spf-heading">
			Sunscreen SPF Meter</h1>
		<h6 className="spf-subheading">(Tap dial)</h6>
		<h2>  SPF {spf} blocks
			<span className="protection">
				{ ` ${ protection }` }
			</span> of the UVB rays.
		</h2>

	</div>;
}	;

export default DisplayText;
