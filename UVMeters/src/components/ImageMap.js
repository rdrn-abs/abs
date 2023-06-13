import React from 'react';
import Mask from './Mask';

const getSegment = (context) => ({ value }) => {
	const { config: { segments }, setState, data: { type }} = context;
	const segment = segments[type][value];

	segment
	&& setState((prevState) => ({ ...prevState, [type]: segment }));
};

const needle = '/needle.png';

const ChildImagesHolder = (context) => {
	const { state, data: { type }} = context;
	const child = `/${ type }.png`;

	return (
		<div>
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
		</div>);
};

const ImageMap = (context) => {
	const { data: { type }} = context;
	const parent = `/${ type }Filled.png`;

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
