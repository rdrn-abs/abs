import React, { useEffect } from 'react';
import ScramblerManager from '../services/scramblerManager';
import axios from 'axios';

const setDiscountShown = async (context) => {
	const { state: { scrambler, input }, setState } = context;
	// eslint-disable-next-line max-len
	const { data } = await axios.post(`${ process.env.REACT_APP_URL }/custom/api/scrambleWord?logged_in_customer_id=${ process.env.REACT_APP_CUSTOMER_ID }`,
		{
			...scrambler.data,
			word: input,
		});

	setState((prev) => ({
		...prev,
		discount: { discountShown: !prev.discountShown, data: data },
	}));
};

const InputHandler = (contextData) => {
	const { setState, data } = contextData;

	return setState((prev) => ({
		...prev,
		wordObject: {
			...prev.wordObject,
			scrambledLetters: ScramblerManager.updateLetters(contextData),
		},
		input: data,
	}));
};

const InputBox = (context) => {
	const { state: { input, wordObject: { scrambledLetters }}} = context;

	useEffect(() => {
		const isAllLetterMatch = scrambledLetters
			.every((scrambledLetter) => scrambledLetter.entered);

		isAllLetterMatch && setDiscountShown(context);
	}, [scrambledLetters]);

	return (
		<input
			className="text-input"
			value={ input }
			placeholder="Click here to start"
			pattern="A-Z"
			onChange={ (event) =>
				InputHandler({ ...context, data: event.target.value }) }
		/>
	);
};

export default InputBox;
