import React from 'react';
import ImageMap from './ImageMap';
import DisplayUVAText from './DisplayUVAText';

const UVLabels = {
	UVAMeter: 'PF',
	UVBMeter: 'SPF',
};
const UVAMeter = (context) => {
	const { data } = context;
	const parent = `/images/${ data.type }.png`;
	const needle = '/images/needle.png';

	return <div className="display-meter">
		<DisplayUVAText { ...context }/>
		<ImageMap { ...{
			...context,
			data: { ...data, parent, needle },
		} }
		/>
		<h4 className="spf-label">{UVLabels[data.type]}</h4>
	</div>;
};

export default UVAMeter;
