import React from 'react';
import ImageMap from './ImageMap';
import DisplayUVBText from './DisplayUVBText';
import parent from '../images/dial11Crop.png';
import needle from '../images/needle11CropWidth.png';

const UVBMeter = (context) => <div className="display-meter">
	<DisplayUVBText { ... { ...context, data: { type: 'UVB' }} }/>
	<ImageMap { ...{
		...context,
		data: { parent: parent, needle: needle, type: 'UVB' },
	} }
	/>
	<h4 className="spf-label">SPF</h4>
</div>;

export default UVBMeter;
