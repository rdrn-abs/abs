import React from 'react';
import { peek } from '@laufire/utils/debug';
import GameOverScreen from './GameOverScreen';

const Feedback = (context) => {
	const { state: { wordCheckPass }} = context;

	peek(wordCheckPass);

	return <div>
		{wordCheckPass
			? <GameOverScreen { ...context }/>
			: <div/>}
	</div>;
};

export default Feedback;
