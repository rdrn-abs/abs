import React from 'react';
import ImageMap from './ImageMap';
import DisplayUVBText from './DisplayUVBText';
import parent from '../images/dial11Crop.png';
import needle from '../images/needle11CropWidth.png';

const UVBMeter = (context) =>

	<div>
		<DisplayUVBText { ...context }/>
		<ImageMap { ...{ ...context, images: { parent, needle }} }/>
	</div>;

export default UVBMeter;
