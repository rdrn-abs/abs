import React from 'react';
import Mask from './Mask';

import childImage from '../assets/bg.jpg';
import parentImage from '../assets/bgFlat.jpg';

import { peek } from '@laufire/utils/debug';

const getSegment = (context) => ({ value }) => {
	const { config: { UVIndex }, setState } = context;

	peek(value);

	value
	&& setState((prevState) => ({
		...prevState,
		value,
	}));
	peek(UVIndex[value]);
};

const ChildImagesHolder = (context) =>
	<div>
		<img { ...{
			className: 'child',
			src: childImage,
			alt: 'bg',
		} }
		/>

	</div>;

const ImageMap = (context) => {
	const { data } = context;

	return (
		<Mask
			{ ...{
				onChange: getSegment(context),
				src: parentImage,
				className: 'parent',
			} }
		>
			<ChildImagesHolder { ...context }/>
		</Mask>
	);
};

export default ImageMap;
