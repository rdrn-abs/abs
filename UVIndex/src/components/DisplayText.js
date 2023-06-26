import React from 'react';

const DisplayText = (context) => {
	const { state: { value }, config: { UVIndex }} = context;
	const { level, danger, text } = UVIndex[value];

	return (
		<div className="display-text tt-post-single">
			<h1 className="spf-heading">UV Index</h1>
			<h4> This is {text}.</h4>
			<h4>The UV index is <span className="protection">
				{level}</span>
				. The risk is {danger}.
			</h4>
		</div>
	);
};

export default DisplayText;
