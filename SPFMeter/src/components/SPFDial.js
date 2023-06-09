import React from 'react';
import ReactSpeedometer from 'react-d3-speedometer';

const two = 2;
const fontValFactor = 17;
const ringWidthFactor = 6;
const fontColor = '#212121';
const valueTextFontWeight = '500';
const needleTransitionDuration = 300;
const dialLimit = 400;
const needleHeightRatioDefault = 0.9;
const needleHeightRatioSmaller = 0.825;

// eslint-disable-next-line max-lines-per-function
const getDialStyles = (context) => {
	const {
		config:	{ customLabels, paddingForLabel, maxDialValue },
		state: { containerProps },
	} = context;
	const needleHeightRatio = containerProps.width < dialLimit
		? needleHeightRatioSmaller
		: needleHeightRatioDefault;

	return {
		textColor: fontColor,
		segments: customLabels.length,
		paddingHorizontal: paddingForLabel,
		paddingVertical: paddingForLabel,
		valueTextFontWeight: valueTextFontWeight,
		currentValueText: 'SPF',
		maxValue: maxDialValue,
		needleTransitionDuration: needleTransitionDuration,
		needleTransition: 'easeLinear',
		customSegmentLabels: customLabels,
		needleHeightRatio: needleHeightRatio,
		maxSegmentLabels: customLabels.length,

	};
};

// eslint-disable-next-line max-lines-per-function
const SPFDial = (context) => {
	const {
		config: { paddingForLabel },
		state: { dialValue, containerProps, forceRender },
	} = context;
	// const fontSize = `${ Math.round(containerProps.width / fontValFactor) }px`;

	const fontSize = '0px';

	return (
		<ReactSpeedometer
			{ ...{
				...getDialStyles(context),
				forceRender: forceRender,
				width: containerProps.width - two * paddingForLabel,

				value: dialValue,
				ringWidth: containerProps.width / ringWidthFactor,
				valueTextFontSize: fontSize,

			}		}
		/>
	);
};

export default SPFDial;
