import React, { useState } from 'react';
import './App.scss';
import ImageMap from './components/ImageMap';
import DisplayText from './components/DisplayText';

const App = (context) => {
	const [state, setState] = useState({ value: '#91bf39ff' });
	const extendedContext = { ...context, state, setState };

	return <div className="UVIndex">
		<ImageMap { ...extendedContext }/>
		<DisplayText { ...extendedContext }/>
	</div>;
};

export default App;
