import React from 'react';
import ReactSpeedometer from 'react-d3-speedometer';
import SPFManager from '../services/SPFManager';

// eslint-disable-next-line max-lines-per-function
const SPFDial = (context) => {
	const { config: { customLabels, paddingForLabel }} = context;
	const media = window.matchMedia('(max-width: 550px)');

	return (
		<ReactSpeedometer
			fluidWidth={ true }
			maxValue={ 160 }
			needleTransitionDuration={ 300 }
			needleTransition="easeLinear"
			value={ SPFManager.findNeedlePosition(context) }
			customSegmentLabels={ customLabels }
			// eslint-disable-next-line no-magic-numbers
			ringWidth={ media.matches ? 80 : 100 }
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
