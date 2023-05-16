import React from 'react';
import ReactSpeedometer from 'react-d3-speedometer';
import SPFManager from '../services/SPFManager';

// eslint-disable-next-line max-lines-per-function
const SPFMeterClick = (context) => {
	const { state, setState } = context;
	const dragHandler = (e) => {
		setState({
			...state, spf: e.currentTarget.value,
		});
	};

	return (
		<div className="slide-container">
			<p>Move slider to see SPF Meter change</p>
			<p> Your protection is {SPFManager.findProtection(context)}</p>
			<div>
				<input
					type="range"
					min="1"
					max="100"
					step="1"
					className="slider"
					id="myRange"
					value={ state.spf }
					onChange={ (e) => dragHandler(e) }
				/>
			</div>
			<div className="meter-container">
				<ReactSpeedometer
					minValue={ 0 }
					maxValue={ 100 }
					value={ state.spf }
					segmentValueFormatter={
						SPFManager.segmentValueFormatter(context)
					}
					// eslint-disable-next-line no-magic-numbers
					customSegmentStops={ [0, 2, 4, 10, 15, 30, 50, 70, 100] }
					fluidWidth={ true }
					needleTransitionDuration={ 100 }
				/>
			</div>

		</div>

	);
};

export default SPFMeterClick;
