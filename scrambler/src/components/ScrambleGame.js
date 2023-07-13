import React, { Fragment } from 'react';
import Game from './Game';
import VisitLater from './VisitLater';
import { keys } from '@laufire/utils/collection';
import Discount from './Discount';

const components = {
	data: (context) => {
		const { state: { scrambler: { data }}} = context;

		return data?.word ? <Game { ...context }/> : <Discount { ...context }/>;
	},
	error: VisitLater,
};

const ScrambleGame = (context) => {
	const { state: { scrambler }} = context;
	const [key] = keys(scrambler);

	return key ? components[key](context) : <Fragment key="dummy"/>;
};

export default ScrambleGame;
