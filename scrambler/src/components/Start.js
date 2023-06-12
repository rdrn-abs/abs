import React, { useEffect } from 'react';
import ScrambleGame from './ScrambleGame';
import ScrambleManager from '../services/scrambleManager';
import axios from 'axios';
import Success from './Success';

const setScrambleWord = async ({ setState, config }) => {
	const { data } = await axios.get(`${ config.appUrl }/custom/api/scrambleWord?logged_in_customer_id=${ config.cid }`);

	setState((state) => ({
		...state,
		scrambler: data,
		letters: ScrambleManager.getScrambledLetters(data),
	}));
};

const Start = (context) => {
	const {
		state: { canPlay },
	} = context;

	// eslint-disable-next-line react-hooks/exhaustive-deps
	useEffect(() => setScrambleWord(context), [canPlay]);
	const GameComponent = !canPlay ? ScrambleGame : Success;

	return (
		<div className="scrambler">
			<GameComponent { ...context }/>
		</div>
	);
};

export default Start;
