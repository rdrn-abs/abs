import React, { useState } from 'react';
import './App.scss';
import DisplayText from './components/DisplayText';
import DisplayMeter from './components/DisplayMeter';
import ImageMap from './components/ImageMap';
import { peek } from '@laufire/utils/debug';

const App = (context) => {
	const { config: { maxDialValue }} = context;
	const third = 0.33;
	const [state, setState] = useState({
		localMouse: { x: 50, y: 0 },
		dialValue: maxDialValue * third,
		containerProps: { width: 300, height: 300 },
		forceRender: false,
	});

	const extendedContext = { ...context, state, setState };

	peek(state);
	return (
		<div className="spf-meter">
			<div className="spf-container">
				<DisplayText { ...extendedContext }/>
				<DisplayMeter { ...extendedContext }/>
				<ImageMap { ...extendedContext }/>
			</div>

		</div>);
};

export default App;
