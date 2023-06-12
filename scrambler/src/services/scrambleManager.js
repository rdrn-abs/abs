import { map, shuffle } from '@laufire/utils/collection';

const scramble = (word) => {
	const strArr = word.split('');

	return shuffle(strArr).join('');
};
const getScrambledLetters = (context) => {
	const { data } = context;

	const scrambledLetters = data?.word.split('').map((letter) =>
		({ letter: letter, entered: false }));

	return { scrambledLetters };
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
	const { letters: { scrambledLetters }} = state;

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

const isAllLetterMatch = (context) => {
	const { state: { letters: { scrambledLetters }}} = context;

	return scrambledLetters
		.every((scrambledLetter) => scrambledLetter.entered);
};

const ScrambleManager = {
	scramble, checkWord, getScrambledLetters, clearInput, showDiscount,
	updateLetters, isAllLetterMatch,
};

export default ScrambleManager;
