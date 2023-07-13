import React, { Fragment } from 'react';
import VisitLater from './VisitLater';
import { keys } from '@laufire/utils/collection';
import Retry from './Retry';
import Success from './Success';

const Failure = (context) => {
	const { state: { scrambler: { error: { remainingChances }}}} = context;
	const Component = remainingChances ? Retry : VisitLater;

	return <Component { ...context }/>;
};

const components = {
	data: Success,
	error: Failure,
};

const ScrambleGame = (context) => {
	const { state: { scrambler }} = context;
	const [key] = keys(scrambler);

	return key ? components[key](context) : <Fragment key="dummy"/>;
};

export default ScrambleGame;
