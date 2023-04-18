import { shuffle } from '@laufire/utils/collection';
import { rndValue } from '@laufire/utils/random';

const scramble = (word) => {
	const strArr = word.split('');

	return shuffle(strArr).join('');
};
const createWord = (context) => {
	const { config: { wordList }} = context;
	const word = rndValue(wordList);
	const scrambledWord = scramble(word);

	return { word, scrambledWord };
};
const checkWord = (word, input) => input.toLowerCase() === word.toLowerCase();
const clearInput = (context) => {
	const { state, setState } = context;

	setState({ ...state, input: '' });
};
const ScramblerManager = {
	scramble, checkWord, createWord, clearInput,
};

export default ScramblerManager;
