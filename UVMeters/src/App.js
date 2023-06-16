import React, { useState } from 'react';
import './App.scss';
import UVMeter from './components/UVMeter';

const colorUVA = '#d4e725ff';
const colorUVB = '#aee329ff';

const App = (context) => {
	const { config: { segments }} = context;

	const [state, setState] = useState({
		UVAMeter: segments.UVAMeter[colorUVA],
		UVBMeter: segments.UVBMeter[colorUVB],
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
