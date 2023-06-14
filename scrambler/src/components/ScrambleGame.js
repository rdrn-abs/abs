import React, { Fragment } from 'react';
import Game from './Game';
import VisitLater from './VisitLater';
import { keys } from '@laufire/utils/collection';

const components = {
	data: Game,
	error: VisitLater,
};

const ScrambleGame = (context) => {
	const { state: { scrambler }} = context;
	const [key] = keys(scrambler);

	return key ? components[key](context) : <Fragment key="dummy"/>;
};

export default ScrambleGame;
