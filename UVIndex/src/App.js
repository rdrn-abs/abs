import React, { useState } from 'react';
import './App.scss';
import ImageMap from './components/ImageMap';
import DisplayText from './components/DisplayText';
import InputText from './components/InputText';

const initColor = '#91bf39ff';

const App = (context) => {
	const [state, setState] = useState({ value: initColor });
	const extendedContext = { ...context, state, setState };

	return <div className="UVIndex">
		<DisplayText { ...extendedContext }/>
		<ImageMap { ...extendedContext }/>
		<InputText { ...extendedContext }/>
	</div>;
};

export default App;
