/* eslint-disable max-lines-per-function */
import { React, useState } from 'react';
import './App.scss';
import DisplayText from './components/DisplayText';
import DisplayMeter from './components/DisplayMeter';

const App = (context) => {
	const [state, setState] = useState({
		globalMouse: { x: 0, y: 0 },
		localMouse: { x: 100, y: 160 },
		inputText: 0,
		containerProps: { width: 300, height: 300 },
	});

	const extendedContext = { ...context, state, setState };

	return (
		<div className="App">
			<h1>SPF METER</h1>
			<div className="container">
				<DisplayText { ...extendedContext }/>
				<DisplayMeter { ...extendedContext }/>
			</div>

		</div>);
};

export default App;
