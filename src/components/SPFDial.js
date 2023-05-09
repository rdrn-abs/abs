import React from 'react';
import ReactSpeedometer from 'react-d3-speedometer';
import SPFManager from '../services/SPFManager';

// eslint-disable-next-line max-lines-per-function
const SPFDial = (context) => {
	const { config: { customLabels, paddingForLabel, maxDialValue }} = context;
	const media = window.matchMedia('(max-width: 550px)');
	// eslint-disable-next-line no-magic-numbers
	const ringWidth = media.matches ? 70 : 110;

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
			textColor="#002222"
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
