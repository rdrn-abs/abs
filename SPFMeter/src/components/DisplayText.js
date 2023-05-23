import React from 'react';
import SPFManager from '../services/SPFManager';

const DisplayText = (context) => {
	const { spf, protection } = SPFManager.findSegment(context);

	return <div className="display-text">
		<h1 className="spf-subheading ">
			Sun Protection Factor Meter</h1>
		<h2 className=" tt-title recipe-title-desktop  ">
			Click on the dial to find the SPF protection!</h2>
		<h2 className=" tt-title recipe-title-mobile  ">
			Click on the dial to find the SPF protection!</h2>
		<h2 className="tt-title-subpages noborder">  SPF {spf} blocks
			<span className="protection">
				{ ` ${ protection }` }
			</span> of the UVB rays.
		</h2>
	</div>;
}	;

export default DisplayText;
