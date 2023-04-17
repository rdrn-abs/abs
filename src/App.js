import { React, useState } from 'react';
import './App.scss';
import Game from './components/Game';
import Feedback from './components/Feedback';
import { rndValue } from '@laufire/utils/random';

const App = (context) => {
	const { config: { wordList }} = context;
	const [state, setState] = useState({ input: '',
		word: rndValue(wordList),
		wordCheckPass: false, discountCode: 'Shop10123' });
	const extendedContext = { ...context, state, setState };

	return <div className="App">
		<Game { ...extendedContext }/>
		<Feedback { ...extendedContext }/>
	</div>;
};

export default App;
