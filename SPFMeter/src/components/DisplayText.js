import React from 'react';
import SPFManager from '../services/SPFManager';

const DisplayText = (context) => {
	const { spf, protection } = SPFManager.findSegment(context);
	const text = ' SPF protection.)';

	return <div className="display-text tt-post-single">
		<h1 className="spf-heading">
			Sunscreen SPF Meter</h1>
		<h6 className="spf-subheading">(Click on the dial to find the
			<br className="mobile-break"/>
			{text}</h6>
		<h2>  SPF {spf} blocks
			<span className="protection">
				{ ` ${ protection }` }
			</span> of the UVB rays.
		</h2>

	</div>;
}	;

export default DisplayText;
