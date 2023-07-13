import React from 'react';
import Discount from './Discount';
import Game from './Game';

const Success = (context) => {
	const { state: { scrambler: { data }}} = context;

	return data?.word ? <Game { ...context }/> : <Discount { ...context }/>;
};

export default Success;
