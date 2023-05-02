import React from 'react';
import ReactSpeedometer from 'react-d3-speedometer';
import SPFManager from '../services/SPFManager';

// eslint-disable-next-line max-lines-per-function
const SPFMeter = (context) => {
	const { state } = context;

	const handleMouseMove = (event) => {
		SPFManager.updateLocalMousePos({ ...context, dataLocal: event });
	};

	return <div>

		<p>global	{state.globalMouse.x}, local is{state.localMouse.x} </p>
		<div
			className="box box1"
			onMouseMove={ handleMouseMove }
		/>
		<div className="box box2">
			<ReactSpeedometer
				minValue={ 0 }
				maxValue={ 400 }
				value={ state.localMouse.x }
				segmentValueFormatter={ SPFManager.segmentValueFormatter }
				// eslint-disable-next-line no-magic-numbers
				customSegmentStops={ [0, 100, 150, 200, 400] }
				segmentColors={ ['#bf616a', '#d08770', '#ebcb8b', '#a3be8c'] }
				paddingHorizontal={ 0 }
				paddingVertical={ 34 }
				needleTransitionDuration={ 100 }
			/>
		</div>

	</div>;
};

export default SPFMeter;
