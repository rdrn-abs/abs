import React, { useEffect } from 'react';
import ScrambleGame from './ScrambleGame';
import { map, values } from '@laufire/utils/collection';
import ScramblerManager from '../services/scramblerManager';

const request = async ({ setState }) => {
	const response = await fetch(`${ process.env.REACT_APP_URL }/custom/api/scrambleWord?logged_in_customer_id= ${ process.env.REACT_APP_CUSTOMER_ID }`);
	const data = await response.json();

	setState((state) => ({
		...state,
		scrambler: data,
		wordObject: ScramblerManager.getScrambleLetters(data),
	}));
};

const Start = (context) => {
	const { state: { scrambler }} = context;

	// eslint-disable-next-line react-hooks/exhaustive-deps
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
