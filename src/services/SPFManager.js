/* eslint-disable no-magic-numbers */
import { peek } from '@laufire/utils/debug';

const updateGlobalMousePos = (context) => {
	const { data, setState } = context;

	setState((prevState) => ({
		...prevState,
		globalMouse: { x: data.clientX, y: data.clientY },

	}));
};

// eslint-disable-next-line max-statements
const updateLocalMousePos = (context) => {
	const { dataLocal, setState } = context;

	setState((prevState) => ({
		...prevState,
		localMouse: { x: dataLocal.clientX - dataLocal.target.offsetLeft,
			y: dataLocal.clientY - dataLocal.target.offsetTop },
	}));
};

const segmentValueFormatter = (context) => {
	const label = 600;

	return label;
};

const calculateMousePosition = (context) => {
	const { state: { localMouse },
		config: { meterWidth, paddingForLabel }} = context;

	const needleOriginX = (meterWidth + paddingForLabel + paddingForLabel) / 2 ;
	const needleOriginY = (meterWidth + paddingForLabel + paddingForLabel) / 2;
	const angleRad = Math.atan2(needleOriginY - localMouse.y,
		localMouse.x - needleOriginX);
	const theta = 180 - (angleRad * 180 / Math.PI);

	return roundValue(
		theta, 0, 180, 270
	);
};
const findNeedlePosition = (context) =>
	calculateMousePosition(context) * 160 / 180
;

const limitValue = (
	val, minVal, maxVal
) =>
	(peek(val) < minVal
		? minVal
		: val > maxVal
			? maxVal
			: val);

// eslint-disable-next-line complexity
const roundValue = (
	val, minVal, maxVal, limit
) =>
	peek(val < minVal
		? minVal
		: val > limit
			? minVal
			: val > maxVal && val < limit
				? maxVal
				: val);

const findSegment = (context) => {
	const {	config: { spfDictionary }} = context;
	const mousePosPercent
		= calculateMousePosition(context) * (100 / 180);

	const foundSegment = spfDictionary.find((obj) =>
		mousePosPercent <= obj.segment);

	return foundSegment;
};
const SPFManager = { updateGlobalMousePos, updateLocalMousePos,
	segmentValueFormatter, findSegment, findNeedlePosition };

export default SPFManager;
