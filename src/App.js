import { React, useEffect, useState } from 'react';
import './App.scss';
import Game from './components/Game';
import ScramblerManager from './services/scramblerManager';
import Success from './components/Success';

const App = (context) => {
	const [state, setState] = useState({
		input: '',
		wordObject: {},
		discountShown: false,

	});
	const extendedContext = { ...context, state, setState };

	useEffect(() => {
		setState({
			...state,
			wordObject: ScramblerManager.createWord(extendedContext),
		});

	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return <div className="App">
		{!state.discountShown && <Game { ...extendedContext }/>}
		<Success { ...extendedContext }/>

	</div>;
};

export default App;
