import React, { useState } from 'react';
import './App.scss';
import UVMeter from './components/UVMeter';

const App = (context) => {
	const { config: { segments }} = context;

	const [state, setState] = useState({
		UVAMeter: segments.UVAMeter['#d4e725ff'],
		UVBMeter: segments.UVBMeter['#ecdb23ff'],
	});

	const extendedContext = { ...context, state, setState };
	const UVMeters = ['UVAMeter', 'UVBMeter'];

	return <div className="UVMeters">
		<div className="holder">
			{
				UVMeters.map((type, index) =>
					<UVMeter
						key={ index }
						{ ...{ ...extendedContext, data: { type }} }
					/>)
			}
		</div>
	</div>;
};

export default App;
