import React, { useEffect } from 'react';
import ScramblerManager from '../services/scramblerManager';
import axios from 'axios';

const setDiscount = async (context) => {
	const { state: { scrambler, input }, setState, config } = context;

	setState((prev) => ({
		...prev,
		isLoading: !prev.isLoading,
	}));
	// eslint-disable-next-line max-len
	const { data } = await axios.post(`${ config.appUrl }/custom/api/scrambleWord?logged_in_customer_id=${ config.cid }`,
		{
			...scrambler.data,
			word: input,
		});

	setState((prev) => ({
		...prev,
		discount: { hasDiscount: !prev.hasDiscount, data: data },
		isLoading: !prev.isLoading,
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
