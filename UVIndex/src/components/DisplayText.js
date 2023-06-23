import React from 'react';

const DisplayText = (context) => {
	const { state: { value }, config: { UVIndex }} = context;
	const { level, danger, text } = UVIndex[value];

	return (
		<div>
			<h1> This is {text}</h1>
			<h1>The UV index is {level}. The risk is {danger}.</h1>
		</div>
	);
};

export default DisplayText;
