import React from 'react';
import ScrambleManager from '../services/scramblerManager';
import ClickDiscount from './ClickDiscount';

const Success = (context) => {
	const { state } = context;
	const { wordObject: { word }, input } = state;

	return <div>
		{word
			? ScrambleManager.checkWord(word, input)
			&& <ClickDiscount { ...context }/>
			: <div/>}
	</div>;
};

export default Success;
