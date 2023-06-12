import React from 'react';
import Mask from './Mask';

// eslint-disable-next-line max-lines-per-function
const ImageMap = (context) => {
	const { config: { segments }, state, setState,
		data: { parent, needle, type }} = context;

	const getSegment = (props) => {
		const { value } = props;
		const gotSegment = segments[type][value];

		gotSegment
		&& setState((prevState) => ({ ...prevState, [type]: gotSegment }));
	};

	return (
		<Mask
			{ ...{ onChange: getSegment, src: parent, className: 'parent' } }
		>
			<div>
				<img{ ...{ className: 'child', src: parent, alt: 'img' } }/>
				<img { ... { className: 'needle',
					src: needle,
					alt: 'img',
					style: { rotate: state[type].angle }}
				}
				/>
			</div>
		</Mask>
	);
};

export default ImageMap;
