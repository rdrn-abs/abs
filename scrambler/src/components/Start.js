import React, { useEffect } from 'react';
import ScrambleGame from './ScrambleGame';
import { map, values } from '@laufire/utils/collection';
import ScrambleManager from '../services/scrambleManager';
import axios from 'axios';
import Success from './Success';

const setScrambleWord = async ({ setState }) => {
	const { data } = await axios.get(`${ window.shopUrl }/apps/backend/custom/api/scrambleWord`);

	setState((state) => ({
		...state,
		scrambler: data,
		letters: ScrambleManager.getScrambledLetters(data),
	}));
};

const Start = (context) => {
	const { state: { scrambler, canPlay }} = context;

	// eslint-disable-next-line react-hooks/exhaustive-deps
	useEffect(() => setScrambleWord(context), [canPlay]);

	return <div className="scrambler">
		{!canPlay
			?	values(map(scrambler, (value, key) =>
				<ScrambleGame
					key={ key }
					{ ...{ ...context, data: { key, value }} }
				/>))
			: <Success { ...context }/>}
	</div>;
};

export default Start;
