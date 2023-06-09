import React from 'react';
import ImageMap from './ImageMap';
import DisplayUVBText from './DisplayUVBText';

const UVBMeter = (context) => {
	const parent = '/images/UVBDial.png';
	const needle = '/images/UVBNeedle.png';

	return <div className="display-meter">
		<DisplayUVBText { ...{ ...context, data: { type: 'UVB' }} }/>
		<ImageMap { ...{
			...context,
			data: { parent: parent, needle: needle, type: 'UVB' },
		} }
		/>
		<h4 className="spf-label">SPF</h4>
	</div>;
};

export default UVBMeter;
