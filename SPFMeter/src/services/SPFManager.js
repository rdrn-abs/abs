const straightAngle = 180;
const centum = 100;
const twoSeventy = 270;

const updateDialValue = (context) => {
	const { state, setState } = context;

	setState({
		...state,
		dialValue: SPFManager.findNeedlePosition(context),
	});
};

const updateLocalMousePos = (context) => (event) => {
	const { state,
		state: { containerProps: { offsetLeft, offsetTop }}} = context;

	const newState = {
		...state,
		localMouse:
			{
				x: event.pageX - offsetLeft,
				y: event.pageY - offsetTop,
			},
		forceRender: false,
	};

	updateDialValue({ ...context, state: newState });
};

const calculateMousePosition = (context) => {
	const {
		state: { localMouse,
			containerProps: { width }},
	} = context;
	const half = 0.5;
	const needleOriginX = width * half;
	const needleOriginY = width * half;
	const angleRad = Math.atan2(needleOriginY - localMouse.y,
		localMouse.x - needleOriginX);
	const theta = straightAngle - (angleRad * straightAngle / Math.PI);

	return roundValue(
		theta, 0, straightAngle, twoSeventy
	);
};

const findNeedlePosition = (context) => {
	const { config: { maxDialValue }} = context;

	return calculateMousePosition(context) * maxDialValue / straightAngle;
};

const getMaxVal = (
	val, maxVal, limit
) => (val > maxVal && val < limit
	? maxVal
	: val);

const roundValue = (
	val, minVal, maxVal, limit
) =>
	(val < minVal || val > limit
		? minVal
		: getMaxVal(
			val, maxVal, limit
		)
	);

const findSegment = (context) => {
	const { config: { spfDictionary }} = context;
	const mousePosPercent
		= calculateMousePosition(context) * (centum / straightAngle);

	const foundSegment = spfDictionary.find((obj) =>
		mousePosPercent <= obj.segment);

	return foundSegment;
};
const SPFManager = { updateLocalMousePos, updateDialValue,
	findSegment, findNeedlePosition };

export default SPFManager;
