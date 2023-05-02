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
	if(value < 100)
		return `${ value } 😒`;

	// eslint-disable-next-line no-magic-numbers
	if(value < 200)
		return `${ value } 😐`;

	// eslint-disable-next-line no-magic-numbers
	if(value < 300)
		return `${ value } 😌`;
};
const SPFManager = { updateGlobalMousePos, updateLocalMousePos,
	segmentValueFormatter };

export default SPFManager;
