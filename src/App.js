import { React, useState } from 'react';
import './App.scss';
import DisplayText from './components/DisplayText';
import DisplayMeter from './components/DisplayMeter';
import InputBox from './components/InputBox';

const App = (context) => {
	const [state, setState] = useState({
		globalMouse: { x: 0, y: 0 },
		localMouse: { x: 100, y: 160 },
		inputText: 0,

	});

	const extendedContext = { ...context, state, setState };

	return <div className="App">
		<h1>SPF METER</h1>
		<InputBox{ ...extendedContext }/>
		<DisplayText { ...extendedContext }/>
		<DisplayMeter { ...extendedContext }/>

	</div>;
};

export default App;
