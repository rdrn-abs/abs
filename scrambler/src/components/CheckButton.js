import React from 'react';
import ScramblerManager from '../services/scramblerManager';

const CheckButton = (context) => {
	const { state: { wordCheckPass }} = context;

	return (
		<button
			disabled={ wordCheckPass }
			onClick={ () => ScramblerManager.checkWord(context) }
		>Check
		</button>
	);
};

export default CheckButton;
