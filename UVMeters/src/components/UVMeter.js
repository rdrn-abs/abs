import React from 'react';
import ImageMap from './ImageMap';
import DisplayUVAText from './DisplayUVAText';
import DisplayUVBText from './DisplayUVBText';

const UVLabels = {
	UVAMeter: 'PF',
	UVBMeter: 'SPF',
};

const UVText = {
	UVAMeter: DisplayUVAText,
	UVBMeter: DisplayUVBText,
};

const UVMeter = (context) => {
	const { data } = context;
	const parent = `/images/${ data.type }.png`;
	const needle = '/images/needle.png';
	const DisplayComponent = UVText[data.type];

	return <div className="display-meter">
		<DisplayComponent { ...context }/>
		<ImageMap { ...{
			...context,
			data: { ...data, parent, needle },
		} }
		/>
		<h4 className="spf-label">{UVLabels[data.type]}</h4>
	</div>;
};

export default UVMeter;
