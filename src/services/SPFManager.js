/* eslint-disable no-magic-numbers */
import { find } from '@laufire/utils/collection';
import { peek } from '@laufire/utils/debug';

const updateGlobalMousePos = (context) => {
	const { data, state, setState } = context;

	setState((prevState) => ({
		...prevState,
		globalMouse: { x: data.clientX, y: data.clientY },

	}));
};

const updateLocalMousePos = (context) => {
	const { dataLocal, state, setState } = context;

	peek(dataLocal.clientX, dataLocal.target.offsetLeft);

	setState((prevState) => ({
		...prevState,
		localMouse: { x: dataLocal.clientX - dataLocal.target.offsetLeft,
			y: dataLocal.clientY - dataLocal.target.offsetTop },
	}));
};

const segmentValueFormatter = (context) => {
	peek(context);

	const label = 600;

	return label;
};
const findNeedlePosition = (context) => {
	const { state: { localMouse }, config: { spfDictionary }} = context;
	const mousePosPercent = localMouse.x / 5;

	peek('mousePos', localMouse.x);
	peek('mousePosPercent', mousePosPercent);
	const value = find(spfDictionary, (val, key) =>
		mousePosPercent < key);

	peek('protection', value.protection);
	return localMouse.x * 2;
};
// eslint-disable-next-line complexity
const findProtection = (context) => {
	const { state: { spf }, config: { spfDictionary }} = context;

	return find(spfDictionary, (percentage, key) => spf < key);
};
const SPFManager = { updateGlobalMousePos, updateLocalMousePos,
	segmentValueFormatter, findProtection, findNeedlePosition };

export default SPFManager;
