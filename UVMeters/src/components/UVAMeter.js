import React from 'react';
import ImageMap from './ImageMap';
import DisplayUVAText from './DisplayUVAText';
import parent from '../images/UVADial.png';
import needle from '../images/UVANeedleCrop.png';

const UVAMeter = (context) => <div className="display-meter">
	<DisplayUVAText { ... { ...context, data: { type: 'UVA' }} }/>
	<ImageMap { ...{
		...context,
		data: { parent: parent, needle: needle, type: 'UVA' },
	} }
	/>
	<h4 className="spf-label">SPF</h4>
</div>;

export default UVAMeter;
