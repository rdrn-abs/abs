import React from 'react';
import ReactSpeedometer from 'react-d3-speedometer';
import SPFManager from '../services/SPFManager';

const lowerRingWidth = 70;
const higherRingWidth = 100;
// eslint-disable-next-line max-lines-per-function
const SPFDial = (context) => {
	const { config: { customLabels, paddingForLabel, maxDialValue }} = context;
	const media = window.matchMedia('(max-width: 550px)');
	const ringWidth = media.matches ? lowerRingWidth : higherRingWidth;

	return (
		<ReactSpeedometer
			forceRender={ true }
			fluidWidth={ true }
			maxValue={ maxDialValue }
			needleTransitionDuration={ 300 }
			needleTransition="easeLinear"
			value={ SPFManager.findNeedlePosition(context) }
			customSegmentLabels={ customLabels }
			ringWidth={ ringWidth }
			textColor="#212121"
			segments={ 8 }
			paddingHorizontal={ paddingForLabel }
			paddingVertical={ paddingForLabel }
			labelFontSize="31px"
			valueTextFontSize="37px"
			valueTextFontWeight="500"
			currentValueText="SPF"
		/>
	);
};

export default SPFDial;
