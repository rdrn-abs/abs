import React, { useEffect } from 'react';
import Success from './Success';
import Game from './Game';
import ScramblerManager from '../services/scramblerManager';

const Start = (context) => {
	const { state, setState } = context;

	useEffect(() => {
		setState({
			...state,
			wordObject: ScramblerManager.createWord(context),
		});
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return <div className="App">
		{!state.discountShown && <Game { ...context }/>}
		<Success { ...context }/>
	</div>;
};

export default Start;
