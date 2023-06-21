import React from 'react';
import Mask from './Mask';

import childImage from '../assets/bg.jpg';
import parentImage from '../assets/bgFlat.jpg';

import { peek } from '@laufire/utils/debug';

const getSegment = (context) => ({ value }) => {
	// const { config: { segments }, setState, data: { type }} = context;
	// const segment = peek(segments[type][value]);

	// peek(value);

	// segment
	// && setState((prevState) => ({
	// 	...prevState,
	// 	[type]: segment,
	// }));
	peek(value);
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
