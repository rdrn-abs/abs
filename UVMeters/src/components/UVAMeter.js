import React from 'react';
import ImageMap from './ImageMap';
import DisplayUVAText from './DisplayUVAText';
import parent from '../images/dial11Crop.png';
import needle from '../images/needle11CropWidth.png';

const UVAMeter = (context) =>

	<div>
		<DisplayUVAText { ...context }/>
		<ImageMap { ...{ ...context, images: { parent, needle }} }/>
	</div>;

export default UVAMeter;
