import { keys } from '@laufire/utils/collection';
import React from 'react';
import Game from './Game';
import VisitLater from './VisitLater';

const components = {
	data: Game,
	error: VisitLater,
};

const ScrambleGame = (context) => {
	const { state: { scrambler }} = context;
	const [key] = keys(scrambler);

	return key ? components[key](context) : <div/>;
};

export default ScrambleGame;
