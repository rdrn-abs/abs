import { map } from '@laufire/utils/collection';

const getScrambledLetters = (context) => {
	const { data } = context;

	const scrambledLetters = data?.word && data.word
		.split('')
		.map((letter) => ({ letter: letter.toUpperCase(), entered: false }));

	return { scrambledLetters };
};

const frequencyTable = (table) =>
	table.reduce((allItems, item) => {
		const currCount = allItems[item] ?? 0;

		return {
			...allItems,
			[item]: currCount + 1,
		};
	}, {});

const resetHighlightLetters = (scrambledLetters) =>
	scrambledLetters.map((letter) => ({ ...letter, entered: false }));

const updateLetters = (context) => {
	const { state, data } = context;
	const {
		letters: { scrambledLetters },
	} = state;

	const inputLetterFreq = frequencyTable(data.split(''));
	const updatedLetters = resetHighlightLetters(scrambledLetters);

	map(inputLetterFreq, (key, item) => {
		const filtered = updatedLetters
			.filter((letter) => item === letter.letter);
		const correctedFiltered = filtered
			.slice(0, Math.min(filtered.length, key));

		correctedFiltered.map((itemm) => {
			// eslint-disable-next-line max-len
			const found = updatedLetters.find((letter) => letter === itemm);

			found.entered = true;
			return updatedLetters;
		});
	});

	return updatedLetters;
};

const checkLetterMatch = (context) => {
	const {
		state: {
			letters: { scrambledLetters },
		},
	} = context;

	return scrambledLetters.every((scrambledLetter) => scrambledLetter.entered);
};

const sixty = 60;
const toSeconds = (time) =>
	time.hours * sixty * sixty + time.minutes * sixty + time.seconds;

const toHoursAndMinutes = (totalSeconds) => {
	const totalMinutes = Math.floor(totalSeconds / sixty);
	const seconds = totalSeconds % sixty;
	const hours = Math.floor(totalMinutes / sixty);
	const minutes = totalMinutes % sixty;

	return { hours, minutes, seconds };
};

const ScrambleManager = {
	getScrambledLetters,
	updateLetters,
	checkLetterMatch,
	toSeconds,
	toHoursAndMinutes,
};

export default ScrambleManager;
