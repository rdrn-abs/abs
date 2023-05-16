import React from 'react';

const InputBox = (context) => {
	const { state, setState } = context;

	return (
		<input
			type="text"
			value={ state.inputText }
			onChange={
				(e) => setState({ ...state, inputText: e.target.value })
			}
		/>);
};

export default InputBox;
