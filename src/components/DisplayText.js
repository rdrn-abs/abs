import React from 'react';
import SPFManager from '../services/SPFManager';

const DisplayText = (context) =>
	<div className="display-text">
		<h4>Click on the dial to find the SPF protection!</h4>
		<h2>  SPF {SPFManager.findSegment(context).spf} blocks
			<span className="pretection">{'  '}
				{SPFManager.findSegment(context).protection}
			</span> of the UVB rays.
		</h2>
	</div>	;

export default DisplayText;
