import React, { useEffect } from 'react';
import ScrambleManager from '../services/scrambleManager';
import { peek } from '@laufire/utils/debug';

const countDown = (context) => {
	const { setState,
		state: { scrambler: { data: { discount: { timeLeft }}}}} = context;
	const seconds = ScrambleManager.toSeconds(timeLeft);

	setState((prevState) => (
		{
			...prevState,
			scrambler: {
				...prevState.scrambler,
				data: {
					...prevState.scrambler.data,
					discount: {
						...prevState.scrambler.data.discount,
						timeLeft: ScrambleManager
							.toHoursAndMinutes(seconds - 1),
					},
				},
			},
		}));
};
const CountDownTimer = (context) => {
	const { config: { milliSeconds },
		state: { scrambler: { data: { discount: { timeLeft }}}}} = context;

	peek(context);

	useEffect(() => {
		const interval = setInterval(() => countDown(context), milliSeconds);

		return () => clearInterval(interval);
	}, [ScrambleManager.toSeconds(timeLeft)]);

	return <div>
		Time remaining {timeLeft.hours}: {timeLeft.minutes}: {timeLeft.seconds}

	</div>;
};

export default CountDownTimer;
