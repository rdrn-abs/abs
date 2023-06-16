import React from 'react';
import ImageMap from './ImageMap';
import DisplayUVAText from './DisplayUVAText';
import DisplayUVBText from './DisplayUVBText';

const UVLabels = {
	UVAMeter: 'PA',
	UVBMeter: 'SPF',
};

const UVText = {
	UVAMeter: DisplayUVAText,
	UVBMeter: DisplayUVBText,
};

const UVMeter = (context) => {
	const { data: { type }} = context;
	const DisplayComponent = UVText[type];

	return <div className="display-meter">
		<DisplayComponent { ...context }/>
		<ImageMap { ...context }/>
		<h4 className="spf-label">{UVLabels[type]}</h4>
	</div>;
};

export default UVMeter;
