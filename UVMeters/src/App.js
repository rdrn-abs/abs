import React, { useState } from 'react';
import './App.scss';
import UVAMeter from './components/UVAMeter';

const App = (context) => {
	const { config: { segments }} = context;

	const [state, setState] = useState({
		UVAMeter: segments.UVAMeter['#d4e725ff'],
		UVBMeter: segments.UVBMeter['#ecdb23ff'],
	});

	const extendedContext = { ...context, state, setState };

	return <div className="UVMeters">
		<div className="holder">
			<UVAMeter { ...{ ...extendedContext, data: { type: 'UVAMeter' }} }/>
			<UVAMeter { ...{ ...extendedContext, data: { type: 'UVBMeter' }} }/>
		</div>
	</div>;
};

export default App;
