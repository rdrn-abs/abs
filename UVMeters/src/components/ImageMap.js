import React from 'react';
import Mask from './Mask';
import parent from '../images/UVBDial.png';
import needle from '../images/UVBNeedle.png';
import { find } from '@laufire/utils/collection';
import { peek } from '@laufire/utils/debug';

// eslint-disable-next-line max-lines-per-function
const ImageMap = (context) => {
	const { config: { spfDictionary }, state, setState } = context;
	const getSegment = (gotColor) => {
		const segment = find(spfDictionary, ({ imgColor }) =>
			imgColor === gotColor);

		peek('help', gotColor);

		const angle = segment
			? segment.angle
			: '33.75deg';

		setState(angle);
		peek(angle);
	};

	return (
		<Mask
			className="parent"
			src={ parent }
			{ ...{ ...context, getSegment } }
		>
			<div>
				<img className="child" src={ parent } alt="img"/>
				<img
					className="needle"
					src={ needle }
					alt="img"
					style={ { rotate: state,
						transformOrigin: 'center 70%' } }
				/>
			</div>
		</Mask>
	);
};

export default ImageMap;
