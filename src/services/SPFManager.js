/* eslint-disable no-magic-numbers */
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

const segmentValueFormatter = (value) => {
	// eslint-disable-next-line no-magic-numbers
	if(value < 20)
		return `${ value } `;

	// eslint-disable-next-line no-magic-numbers
	if(value < 60)
		return `${ value } 😐`;

	// eslint-disable-next-line no-magic-numbers
	if(value < 100)
		return `${ value } 😌`;
};

// eslint-disable-next-line complexity
const findProtection = (context) => {
	const { state: { spf }, config: { spfDictionary }} = context;

	if(spf < 2)
		return '50%';
	if(spf < 4)
		return '75%';
	if(spf < 10)
		return '90%';
	if(spf < 15)
		return '93%';
	if(spf < 30)
		return '97%';
	if(spf < 50)
		return '98%';
	if(spf < 70)
		return '98.5%';
	if(spf <= 100)
		return '99%';
};
const SPFManager = { updateGlobalMousePos, updateLocalMousePos,
	segmentValueFormatter, findProtection };

export default SPFManager;
