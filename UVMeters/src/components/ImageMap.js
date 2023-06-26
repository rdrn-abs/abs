import React from 'react';
import Mask from './Mask';
import needle from '../assets/images/needle.png';
import childUVA from '../assets/images/UVAMeter.png';
import parentUVA from '../assets/images/UVAMeterFilled.png';
import childUVB from '../assets/images/UVBMeter.png';
import parentUVB from '../assets/testing/UVBDial-23062023-tiny.png';
import { peek } from '@laufire/utils/debug';

const getSegment = (context) => ({ value }) => {
	const { config: { segments }, setState, data: { type }} = context;
	const segment = peek(segments[type][value]);

	peek(value);

	segment
	&& setState((prevState) => ({
		...prevState,
		[type]: segment,
	}));
};

const childImages = {
	UVAMeter: childUVA,
	UVBMeter: childUVB,
};

const parentImages = {
	UVAMeter: parentUVA,
	UVBMeter: parentUVB,
};

const ChildImagesHolder = (context) => {
	const { state, data: { type }} = context;
	const child = childImages[type];

	return <div>
		<img { ...{
			className: 'child',
			src: child,
			alt: 'dial',
		} }
		/>
		<img { ...{
			className: 'needle',
			src: needle,
			alt: 'needle',
			style: { rotate: state[type].angle },
		}	}
		/>
	</div>;
};

const ImageMap = (context) => {
	const { data: { type }} = context;
	const parent = parentImages[type];

	return (
		<Mask
			{ ...{
				onChange: getSegment(context),
				src: parent,
				className: 'parent',
			} }
		>
			<ChildImagesHolder { ...context }/>
		</Mask>
	);
};

export default ImageMap;
