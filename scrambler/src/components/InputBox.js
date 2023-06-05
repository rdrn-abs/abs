import React, { useEffect } from 'react';
import ScramblerManager from '../services/scramblerManager';
import axios from 'axios';

const setDiscount = async (context) => {
	const { state: { scrambler, input }, setState } = context;
	// eslint-disable-next-line max-len
	const { data } = await axios.post(`${ process.env.REACT_APP_URL }/custom/api/scrambleWord?logged_in_customer_id=${ process.env.REACT_APP_CUSTOMER_ID }`,
		{
			...scrambler.data,
			word: input,
		});

	setState((prev) => ({
		...prev,
		discount: { hasDiscount: !prev.hasDiscount, data: data },
	}));
};

const InputHandler = (context) => ({ target: { value }}) => {
	const { setState } = context;

	return setState((prev) => ({
		...prev,
		wordObject: {
			...prev.wordObject,
			scrambledLetters: ScramblerManager
				.updateLetters({ ...context, data: value }),
		},
		input: value,
	}));
};

const InputBox = (context) => {
	const { state: { input, wordObject: { scrambledLetters }}} = context;

	useEffect(() => {
		const isAllLetterMatch = scrambledLetters
			.every((scrambledLetter) => scrambledLetter.entered);

		isAllLetterMatch && setDiscount(context);
	}, [scrambledLetters]);

	return (
		<input
			className="text-input"
			value={ input }
			placeholder="Click here to start"
			pattern="A-Z"
			onChange={ InputHandler(context) }
		/>
	);
};

export default InputBox;
