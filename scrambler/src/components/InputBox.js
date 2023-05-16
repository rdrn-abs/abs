import React from 'react';
import ScramblerManager from '../services/scramblerManager';
import { peek } from '@laufire/utils/debug';

const InputHandler = (contextData) => {
	const { state, setState, data } = contextData;

	peek(ScramblerManager.updateLetters(contextData));

	return setState({
		...state,
		wordObject: {
			...state.wordObject,
			scrambledLetters: ScramblerManager.updateLetters(contextData),
		},
		input: data,
	});
}
	;

const InputBox = (context) => {
	const { state } = context;

	return (
		<input
			className="text-input"
			value={ state.input }
			placeholder="Click here to start"
			pattern="A-Z"
			onChange={ (event) =>
				InputHandler({ ...context,
					data: event.target.value }) }

		/>

	);
};

export default InputBox;
