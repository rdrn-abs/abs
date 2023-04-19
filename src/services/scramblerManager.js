import { shuffle } from '@laufire/utils/collection';
import { rndValue } from '@laufire/utils/random';

const scramble = (word) => {
	const strArr = word.split('');

	return shuffle(strArr).join('');
};
const createWord = (context) => {
	const { config: { wordList }} = context;
	const word = rndValue(wordList);

	const letterObject = {};

	const letters = word.split('').map((letter) =>
		({ ...letterObject, letter: letter, entered: false }));

	const scrambledLetters = shuffle(letters);

	return { word, scrambledLetters };
};
const checkWord = (word, input) => input.toLowerCase() === word.toLowerCase();

const clearInput = (context) => {
	const { state, setState } = context;

	setState({ ...state, input: '' });
};

const showDiscount = ({ state, setState }) =>
	setState({ ...state, discountShown: true });

const updateLetters = (context) => {
	const { state, data } = context;
	const { wordObject: { scrambledLetters }} = state;

	return scrambledLetters.map((item) =>
		(item.letter === data
			? { ...item, entered: true }
			: item));
};
const checkValidLetter = (context) => {
	const { state, data } = context;
	const { wordObject: { scrambledLetters }} = state;
	const lettersAr = scrambledLetters.reduce((item) => item.letter, []);

	data.split('');

	return scrambledLetters.map((item) =>
		(item.letter === data
			? data
			: ''));
};

const ScramblerManager = {
	scramble, checkWord, createWord, clearInput, showDiscount,
	updateLetters, checkValidLetter,
};

export default ScramblerManager;
