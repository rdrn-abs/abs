import React, { useEffect } from 'react';
import ScrambleGame from './ScrambleGame';
import { map, values } from '@laufire/utils/collection';
import ScramblerManager from '../services/scramblerManager';
import axios from 'axios';
import Success from './Success';

const setScrambleWord = async ({ setState }) => {
	const { data } = await axios.get(`${ window.shopUrl }/apps/backend/custom/api/scrambleWord`);

	setState((state) => ({
		...state,
		scrambler: data,
		wordObject: ScramblerManager.getScrambleLetters(data),
	}));
};

const Start = (context) => {
	const { state: { scrambler, discount: { hasDiscount }}} = context;

	// eslint-disable-next-line react-hooks/exhaustive-deps
	useEffect(() => setScrambleWord(context), [hasDiscount]);

	return <div className="scrambler">
		{!hasDiscount
			?	values(map(scrambler, (value, key) =>
				<ScrambleGame
					key={ key }
					{ ...{ ...context, data: { key, value }} }
				/>))
			: <Success { ...context }/>}
	</div>;
};

export default Start;
