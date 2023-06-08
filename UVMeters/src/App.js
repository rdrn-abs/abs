import { React, useState } from 'react';
import './App.scss';
import UVBMeter from './components/UVBMeter';
import UVAMeter from './components/UVAMeter';

const App = (context) => {
	const { config: { spfDictionary }} = context;

	const [state, setState] = useState({
		segment: spfDictionary[4],
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
