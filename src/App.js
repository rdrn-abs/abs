import { React, useEffect, useState } from 'react';
import './App.scss';
import Game from './components/Game';
import ScramblerManager from './services/scramblerManager';

const App = (context) => {
	const [state, setState] = useState({
		input: '',
		wordObject: {},
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
		<Game { ...extendedContext }/>

	</div>;
};

export default App;
