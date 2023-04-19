import React from 'react';
import ScramblerManager from '../services/scramblerManager';

const InputHandler = (contextData) => {
	const { state, setState } = contextData;

	return setState({
		...state,
		wordObject: {
			...state.wordObject,
			scrambledLetters: ScramblerManager.updateLetters(contextData),
		},
		input: ScramblerManager.checkValidLetter(contextData),
	});
}
	;

const InputBox = (context) => {
	const { state } = context;

	return (
		<input
			className="text-input"
			value={ state.input }
			onChange={ (event) =>
				InputHandler({ ...context, data: event.target.value }) }

		/>

	);
};

export default InputBox;
