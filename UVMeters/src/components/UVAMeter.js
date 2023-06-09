import React from 'react';
import ImageMap from './ImageMap';
import DisplayUVAText from './DisplayUVAText';

const UVAMeter = (context) => {
	const parent = '/images/UVADial.png';
	const needle = '/images/UVANeedle.png';

	return <div className="display-meter">
		<DisplayUVAText { ...{ ...context, data: { type: 'UVA' }} }/>
		<ImageMap { ...{
			...context,
			data: { parent: parent, needle: needle, type: 'UVA' },
		} }
		/>
		<h4 className="spf-label">SPF</h4>
	</div>;
};

export default UVAMeter;
