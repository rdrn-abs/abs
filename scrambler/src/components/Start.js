import React, { useEffect } from 'react';
import ScrambleGame from './ScrambleGame';
import { map, values } from '@laufire/utils/collection';
import ScramblerManager from '../services/scramblerManager';
import axios from 'axios';

const request = async ({ setState }) => {
	// eslint-disable-next-line max-len
	const { data } = await axios.get(`${ process.env.REACT_APP_URL }/custom/api/scrambleWord?logged_in_customer_id=${ process.env.REACT_APP_CUSTOMER_ID }`);

	setState((state) => ({
		...state,
		scrambler: data,
		wordObject: ScramblerManager.getScrambleLetters(data),
	}));
};

const Start = (context) => {
	const { state: { scrambler }} = context;

	useEffect(() => request(context), []);

	return (
		<div className="App">
			{values(map(scrambler, (value, key) =>
				<ScrambleGame
					key={ key }
					{ ...{ ...context, data: { key, value }} }
				/>))}
		</div>
	);
};

export default Start;
