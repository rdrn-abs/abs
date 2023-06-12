import React from 'react';
import Mask from './Mask';

const getSegment = (context) => ({ value }) => {
	const { config: { segments }, setState, data: { type }} = context;
	const segment = segments[type][value];

	segment
	&& setState((prevState) => ({ ...prevState, [type]: segment }));
};

const needle = '/images/needle.png';

const ImageMap = (context) => {
	const { state, data: { type }} = context;
	const parent = `/images/${ type }.png`;

	return (
		<Mask
			{ ...{
				onChange: getSegment(context),
				src: parent, className: 'parent',
			} }
		>
			<div>
				<img{ ...{ className: 'child', src: parent, alt: 'img' } }/>
				<img { ... { className: 'needle',	src: needle,
					alt: 'img',	style: { rotate: state[type].angle }}
				}
				/>
			</div>
		</Mask>
	);
};

export default ImageMap;
