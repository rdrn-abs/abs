import React from 'react';
import ReactSpeedometer from 'react-d3-speedometer';

const two = 2;
const fontValFactor = 17;
const ringWidthFactor = 6;
const fontColor = '#212121';
const valueTextFontWeight = '500';
const needleTransitionDuration = 300;

const getDialStyles = (context) => {
	const { config:	{ customLabels, paddingForLabel, maxDialValue }} = context;

	return {
		textColor: fontColor,
		segments: customLabels.length,
		paddingHorizontal: paddingForLabel,
		paddingVertical: paddingForLabel,
		labelFontSize: '50px',
		valueTextFontWeight: valueTextFontWeight,
		currentValueText: 'SPF',
		maxValue: maxDialValue,
		needleTransitionDuration: needleTransitionDuration,
		needleTransition: 'easeLinear',
		customSegmentLabels: customLabels,
	};
};

const SPFDial = (context) => {
	const {
		config: { paddingForLabel },
		state: { dialValue, containerProps, forceRender },
	} = context;
	const fontSize = `${ Math.round(containerProps.width / fontValFactor) }px`;

	return (
		<ReactSpeedometer
			{ ...{
				...getDialStyles(context),
				forceRender: forceRender,
				width: containerProps.width - (two * paddingForLabel),
				height: containerProps.height,
				value: dialValue,
				ringWidth: containerProps.width / ringWidthFactor,
				valueTextFontSize: fontSize,
			}		}
		/>
	);
};

export default SPFDial;
