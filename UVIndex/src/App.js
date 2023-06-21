import React, { useState } from 'react';
import './App.scss';
import ImageMap from './components/ImageMap';

const App = (context) => {
	const [state, setState] = useState();
	const extendedContext = { ...context, state, setState };

	return <div className="UVIndex">
		<ImageMap { ...extendedContext }/>
	</div>;
};

export default App;
