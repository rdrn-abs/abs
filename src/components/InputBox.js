import React from 'react';

const InputBox = (context) => {
	const { state, setState } = context;

	return (
		<input
			className="text-input"
			value={ state.input }
			onChange={ (event) => {
				setState((prevState) =>
					({ ...prevState, input: event.target.value }));
			} }
		/>

	);
};

export default InputBox;
