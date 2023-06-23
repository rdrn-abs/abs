import React, { useState } from 'react';
import './App.scss';
import ImageMap from './components/ImageMap';
import DisplayText from './components/DisplayText';

const initColor = '#91bf39ff';

const App = (context) => {
	const [state, setState] = useState({ value: initColor });
	const extendedContext = { ...context, state, setState };

	return <div className="UVIndex">
		<DisplayText { ...extendedContext }/>
		<ImageMap { ...extendedContext }/>
	</div>;
};

export default App;
