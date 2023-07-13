import React, { useEffect } from 'react';
import ScrambleGame from './ScrambleGame';
import ScrambleManager from '../services/scrambleManager';
import { keys } from '@laufire/utils/collection';
import Loading from './Loading';
import axios from 'axios';

const setScrambleWord = async ({ setState }) => {
	const { data } = await axios.get(`${ window.shopUrl }/apps/backend/custom/api/scrambleWord`);

	setState((state) => ({
		...state,
		scrambler: data,
		letters: ScrambleManager.getScrambledLetters(data),
	}));
};

const Start = (context) => {
	const {
		state: { canPlay, scrambler },
	} = context;

	// eslint-disable-next-line react-hooks/exhaustive-deps
	useEffect(() => !canPlay && setScrambleWord(context), [canPlay]);

	const StartComponent = keys(scrambler).length !== 0
		? ScrambleGame
		: Loading;

	return (
		<div className="scrambler">
			<StartComponent { ...context }/>
		</div>
	);
};

export default Start;
