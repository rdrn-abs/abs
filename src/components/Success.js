import React from 'react';
import ScramblerManager from '../services/scramblerManager';
import ClickDiscount from './ClickDiscount';

const Success = (context) => {
	const { state } = context;
	const { wordObject: { word }, input } = state;

	return <div>
		{word
			? ScramblerManager.checkWord(word, input)
			&& <ClickDiscount { ...context }/>
			: <div/>}
	</div>;
};

export default Success;
