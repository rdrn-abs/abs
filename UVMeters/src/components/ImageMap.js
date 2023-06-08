import React from 'react';
import Mask from './Mask';

import { find } from '@laufire/utils/collection';

// eslint-disable-next-line max-lines-per-function
const ImageMap = (context) => {
	const { config: { spfDictionary }, state, setState,
		images: { parent, needle }} = context;
	const getSegment = (props) => {
		const { value } = props;
		const gotSegment = find(spfDictionary, ({ imgColor }) =>
			imgColor === value);

		gotSegment && setState({ ...state, segment: gotSegment });
	};

	return (
		<Mask
			className="parent"
			src={ parent }
			{ ...{ ...context, onChange: getSegment } }
		>
			<div>
				<img className="child" src={ parent } alt="img"/>
				<img
					className="needle"
					src={ needle }
					alt="img"
					style={ { rotate: state.segment.angle,
						transition: 'rotate 300ms ease-out',
						transformOrigin: 'center bottom' } }
				/>
			</div>
		</Mask>
	);
};

export default ImageMap;
