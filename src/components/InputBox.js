import React from 'react';

const InputBox = (context) => {
	const { state, setState } = context;

	return (
		<input
			className="text-input"
			value={ state.input }
			disabled={ state.wordCheckPass }
			onChange={ (event) =>
				setState({ ...state, input: event.target.value }) }
		/>

	);
};

export default InputBox;
