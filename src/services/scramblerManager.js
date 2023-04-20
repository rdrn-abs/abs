import { map, shuffle } from '@laufire/utils/collection';
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
const checkWord = (word, input) => word.toUpperCase() === input.toUpperCase();

const clearInput = (context) => {
	const { state, setState } = context;

	setState({ ...state, input: '' });
};

const showDiscount = ({ state, setState }) =>
	setState({ ...state, discountShown: true });

const frequencyTable = (table) => table.reduce((allItems, item) => {
	const currCount = allItems[item] ?? 0;

	return {
		...allItems,
		[item]: currCount + 1,
	};
}, {});

const resetHighlightLetters = (scrambledLetters) => scrambledLetters
	.map((letter) => ({ ...letter,
		entered: false }));

const updateLetters = (context) => {
	const { state, data } = context;
	const { wordObject: { scrambledLetters }} = state;

	const inputLetterFreq = frequencyTable(data.split(''));
	const updatedLetters = resetHighlightLetters(scrambledLetters);

	map(inputLetterFreq, (key, item) => {
		const filtered = updatedLetters
			.filter((letter) => item === letter.letter);
		const correctedFiltered = filtered
			.slice(0, Math.min(filtered.length, key));

		correctedFiltered.map((itemm) => {
			const found = updatedLetters.find((letter) => letter === itemm);

			found.entered = true;
			return updatedLetters;
		});
	});

	return updatedLetters;
};

const ScramblerManager = {
	scramble, checkWord, createWord, clearInput, showDiscount,
	updateLetters,
};

export default ScramblerManager;
