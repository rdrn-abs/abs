import React from 'react';
import SPFLabels from './SPFLabels';

const DisplayMeter = (context) =>
	<div className="meter-container">
		<SPFLabels { ...context }/>
	</div>;

export default DisplayMeter;
