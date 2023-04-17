import React from 'react';
import ScramblerManager from '../services/scramblerManager';

const CheckButton = (context) =>
	<button
		onClick={ () => ScramblerManager.checkWord(context) }
	>Check
	</button>;

export default CheckButton;
