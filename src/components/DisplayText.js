import React from 'react';
import SPFManager from '../services/SPFManager';

const DisplayText = (context) =>
	<div>
		<h4>Click on the dial to find the SPF protection!</h4>
		<h2> Your protection
			is {SPFManager.findSegment(context).protection}</h2>
		<h2> for spf less than {SPFManager.findSegment(context).spf}.</h2>
	</div>
	;

export default DisplayText;
