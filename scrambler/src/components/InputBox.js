import React from 'react';
import ScramblerManager from '../services/scramblerManager';

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
	const { state } = context;

	return (
		<input
			className="text-input"
			value={ state.input }
			placeholder="Click here to start"
			pattern="A-Z"
			onChange={ (event) =>
				InputHandler({ ...context, data: event.target.value }) }
		/>
	);
};

export default InputBox;
