import React from 'react';
import SPFManager from '../services/SPFManager';

const MouseDetector = (context) =>
	<div
		className="dial-container"
		onMouseDown={ (event) => SPFManager.updateLocalMousePos({
			...context, dataLocal: event,
		}) }
	/>;

export default MouseDetector;
