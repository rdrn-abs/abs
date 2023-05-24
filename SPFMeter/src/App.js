import React, { useState } from 'react';
import './App.scss';
import DisplayText from './components/DisplayText';
import DisplayMeter from './components/DisplayMeter';

const App = (context) => {
	const { config: { maxDialValue }} = context;
	const half = 0.5;
	const [state, setState] = useState({
		localMouse: { x: 100, y: 160 },
		inputText: 0,
		dialValue: maxDialValue * half,
		containerProps: { width: 300, height: 300 },
	});

	const extendedContext = { ...context, state, setState };

	return (
		<div className="spf-meter">
			<div className="spf-container">
				<DisplayText { ...extendedContext }/>
				<DisplayMeter { ...extendedContext }/>
			</div>
		</div>);
};

export default App;
