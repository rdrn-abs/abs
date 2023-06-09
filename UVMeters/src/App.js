import React, { useState } from 'react';
import './App.scss';
import UVBMeter from './components/UVBMeter';
import UVAMeter from './components/UVAMeter';

const App = (context) => {
	const { config: { segments }} = context;

	const [state, setState] = useState({
		UVA: segments.UVA['#d4e725ff'],
		UVB: segments.UVB['#ecdb23ff'],
	});

	const extendedContext = { ...context, state, setState };

	return <div className="UVBMeter">
		<div className="holder">
			<UVAMeter { ...extendedContext }/>
			<UVBMeter { ...extendedContext }/>
		</div>
	</div>;
};

export default App;
