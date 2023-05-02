import React from 'react';
import ReactSpeedometer from 'react-d3-speedometer';
import SPFManager from '../services/SPFManager';
const segmentValueFormatter = (value) => {
	// eslint-disable-next-line no-magic-numbers
	if(value < 100)
		return `${ value } 😒`;

	// eslint-disable-next-line no-magic-numbers
	if(value < 200)
		return `${ value } 😐`;

	// eslint-disable-next-line no-magic-numbers
	if(value < 300)
		return `${ value } 😌`;
};

// eslint-disable-next-line max-lines-per-function
const SPFMeter = (context) => {
	const { state } = context;

	const handleMouseMove = (event) => {
		SPFManager.updateLocalMousePos({ ...context, datalocal: event });
	};

	return <div>

		<p>global	{state.globalMouse.x}, local is{state.localMouse.x} </p>
		<div
			style={ {
				border: '1px solid gray',
				display: 'inline-block',
				width: '400px',
				height: '400px',
				textAlign: 'center',
				zIndex: 10,
				position: 'absolute',
			} }
			onMouseMove={ handleMouseMove }
		/>
		<div
			style={ {
				border: '1px solid gray',
				display: 'inline-block',
				width: '400px',
				height: '400px',
				textAlign: 'center',
				zIndex: 1,
				position: 'absolute',
			} }
		>
			<ReactSpeedometer
				minValue={ 0 }
				maxValue={ 400 }
				value={ state.localMouse.x }
				segmentValueFormatter={ segmentValueFormatter }
				// eslint-disable-next-line no-magic-numbers
				customSegmentStops={ [0, 100, 150, 200, 400] }
				segmentColors={ ['#bf616a', '#d08770', '#ebcb8b', '#a3be8c'] }
				paddingHorizontal={ 34 }
				paddingVertical={ 34 }
				needleTransitionDuration={ 100 }
			/>
		</div>

	</div>;
};

export default SPFMeter;
