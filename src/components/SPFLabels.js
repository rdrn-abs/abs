/* eslint-disable max-lines-per-function */
import React from 'react';
import ReactSpeedometer from 'react-d3-speedometer';
import SPFManager from '../services/SPFManager';

const SPFLabels = (context) => {
	const { config: { meterWidth, customLabels, paddingForLabel },
		state: { inputText }} = context;

	const handleMouseClick = (event) => {
		SPFManager.updateLocalMousePos({ ...context, dataLocal: event });
	};

	return (
		<div className="">
			<div
				className="box box1"
				onMouseDown={ handleMouseClick }
			/>
			<div className="box box2">

				<ReactSpeedometer
					maxValue={ 160 }
					width={ meterWidth }
					height={ meterWidth }
					needleHeightRatio={ 1 }
					needleTransitionDuration={ 300 }
					needleTransition="easeLinear"
					value={ SPFManager.findNeedlePosition(context) }

					customSegmentLabels={ customLabels }
					ringWidth={ 100 }
					textColor="#002222"

					segments={ 8 }
					paddingHorizontal={ paddingForLabel }
					paddingVertical={ paddingForLabel }
					labelFontSize="31px"
					valueTextFontSize="37px"
					valueTextFontWeight="500"

					// eslint-disable-next-line no-template-curly-in-string
					currentValueText="SPF"

				/>
			</div>
		</div>
	);
};

export default SPFLabels;
