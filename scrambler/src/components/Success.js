import React from 'react';
import { keys } from '@laufire/utils/collection';
import Discount from './Discount';
import Retry from './Retry';
import VisitLater from './VisitLater';

const components = {
	data: Discount,
	error: (context) => {
		const { state: { discount: { error: { remainingChances }}}} = context;
		const Component = remainingChances ? Retry : VisitLater;

		return <Component { ...context }/>;
	},
};

const Success = (context) => {
	const { state: { discount }} = context;
	const [first] = keys(discount);

	return components[first](context);
};

export default Success;
