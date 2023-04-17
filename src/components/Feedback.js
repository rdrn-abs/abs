import React from 'react';
import Discount from './Discount';
import { peek } from '@laufire/utils/debug';

const Feedback = (context) => {
	const { state: { wordCheckPass }} = context;

	peek(wordCheckPass);

	return <div>
		{wordCheckPass ? <Discount { ...context }/> : <div/>}
	</div>;
};

export default Feedback;
