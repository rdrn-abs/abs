import React, { useEffect } from 'react';
import ScrambleGame from './ScrambleGame';
import { map, values } from '@laufire/utils/collection';
import ScramblerManager from '../services/scramblerManager';
import axios from 'axios';
import Success from './Success';

const getScrambleWord = async ({ setState }) => {
	// eslint-disable-next-line max-len
	const { data } = await axios.get(`${ process.env.REACT_APP_URL }/custom/api/scrambleWord?logged_in_customer_id=${ process.env.REACT_APP_CUSTOMER_ID }`);

	setState((state) => ({
		...state,
		scrambler: data,
		wordObject: ScramblerManager.getScrambleLetters(data),
	}));
};

const Start = (context) => {
	const { state: { scrambler, discount: { hasDiscount }}} = context;

	useEffect(() => getScrambleWord(context), []);

	return <div className="App">
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
