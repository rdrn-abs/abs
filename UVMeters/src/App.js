import { React, useState } from 'react';
import './App.scss';
import Meter from './components/Meter';

const App = (context) => {
	const [state, setState] = useState('45deg');
	const extendedContext = { ...context, state, setState };

	return <div className="UVBMeter">
		<div className="holder">
			<Meter { ...extendedContext }/>
		</div>
	</div>;
};

export default App;
