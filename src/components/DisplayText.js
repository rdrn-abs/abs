import React from 'react';
import SPFManager from '../services/SPFManager';

const DisplayText = (context) => {
	const { spf, protection } = SPFManager.findSegment(context);

	return <div className="display-text">
		<h1>SPF METER</h1>
		<h4>Click on the dial to find the SPF protection!</h4>
		<h2>  SPF {spf} blocks
			<span className="protection">
				{ ` ${ protection }` }
			</span> of the UVB rays.
		</h2>
	</div>;
}	;

export default DisplayText;
