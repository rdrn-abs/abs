import React, { useEffect } from 'react';
import ScrambleGame from './ScrambleGame';
import ScrambleManager from '../services/scrambleManager';
import Success from './Success';
import { keys } from '@laufire/utils/collection';
import Loading from './Loading';

// const setScrambleWord = async ({ setState }) => {
// const { data } = await axios.get(`${ window.shopUrl }/apps/backend/custom/api/scrambleWord`);
const setScrambleWord = ({ setState }) => {
	setState((state) => ({
		...state,
		scrambler: { data: { word: 'dummy' }},
		letters: ScrambleManager
			.getScrambledLetters({ data: { word: 'dummy' }}),
	}));
};

const Start = (context) => {
	const {
		state: { canPlay, scrambler },
	} = context;

	// eslint-disable-next-line react-hooks/exhaustive-deps
	useEffect(() => !canPlay && setScrambleWord(context), [canPlay]);
	const GameComponent = !canPlay ? ScrambleGame : Success;
	const StartComponent = keys(scrambler).length !== 0
		? GameComponent
		: Loading;

	return (
		<div className="scrambler">
			<StartComponent { ...context }/>
		</div>
	);
};

export default Start;
