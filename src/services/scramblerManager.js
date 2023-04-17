import { shuffle } from '@laufire/utils/collection';
import { rndValue } from '@laufire/utils/random';

const scramble = ({ state: { word }}) => {
	const strArr = word.split('');

	return shuffle(strArr).join('');
};
const createWord = (context) => {
	const { config: { wordList }, state, setState } = context;

	setState({ ...state,
		word: rndValue(wordList), input: '',
		wordCheckPass: false });
};
const checkWord = (context) => {
	const { state, setState } = context;
	const { word, input } = state;

	(input.toLowerCase() === word.toLowerCase())
	&& setState({ ...state, wordCheckPass: true, input: input.toUpperCase() });
};
const clearInput = (context) => {
	const { state, setState } = context;

	setState({ ...state, input: '' });
};
const ScramblerManager = {
	scramble, checkWord, createWord, clearInput,
};

export default ScramblerManager;
