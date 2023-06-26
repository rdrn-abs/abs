import React from 'react';
import Mask from './Mask';

import childImage from '../assets/bg.jpg';
import parentImage from '../assets/bg.svg';
import cursorImage from '../assets/manOrangeTiny.png';

import { peek } from '@laufire/utils/debug';

const getSegment = (context) => ({ value }) => {
	const { config: { UVIndex }, setState } = context;

	peek(value);

	const segment = UVIndex[value];

	segment && setState((prevState) => ({
		...prevState,
		value,
	}));

	peek(UVIndex[value]);
};

const ChildImageHolder = () =>
	<div>
		<img { ...{
			className: 'child',
			src: childImage,
			alt: 'bg',
		} }
		/>
	</div>;

const cursorStyle = { cursor: `url(${ cursorImage }) 16 16, auto` };

const ImageMap = (context) =>
	<div>
		<Mask
			style={ cursorStyle }
			{ ...{
				onChange: getSegment(context),
				src: parentImage,
				className: 'parent',
			} }
		>
			<ChildImageHolder/>
		</Mask>;
	</div>;

export default ImageMap;
