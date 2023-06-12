import React, { useEffect } from 'react';
import ScrambleManager from '../services/scrambleManager';
import axios from 'axios';

const setDiscount = async (context) => {
	const { state: { scrambler, input }, setState, config } = context;

	setState((prev) => ({
		...prev,
		isLoading: !prev.isLoading,
	}));

	const { data } = await axios.post(`${ config.appUrl }/custom/api/scrambleWord?logged_in_customer_id=${ config.cid }`,
		{
			...scrambler.data,
			word: input,
		});

	setState((prev) => ({
		...prev,
		discount: data,
		canPlay: !prev.canPlay,
		isLoading: !prev.isLoading,
	}));
};

const InputHandler = (context) => ({ target: { value }}) => {
	const { setState } = context;

	setState((prev) => ({
		...prev,
		letters: {
			...prev.letters,
			scrambledLetters: ScrambleManager
				.updateLetters({ ...context, data: value }),
		},
		input: value,
	}));
};

const InputBox = (context) => {
	const { state: { input }} = context;

	useEffect(() => {
		const isAllLetterMatch = ScrambleManager.isAllLetterMatch(context);

		isAllLetterMatch && setDiscount(context);
	}, [context]);

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
