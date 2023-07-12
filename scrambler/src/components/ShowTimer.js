/* eslint-disable no-magic-numbers */
import React, { useEffect } from 'react';

// eslint-disable-next-line max-lines-per-function
const ShowTimer = (context) => {
	const { state: { timeLeft }, setState } = context;

	const toSeconds = (time) =>
		time.hours * 60 * 60 + time.minutes * 60 + time.seconds;

	const toHoursAndMinutes = (totalSeconds) => {
		const totalMinutes = Math.floor(totalSeconds / 60);
		const seconds = totalSeconds % 60;
		const hours = Math.floor(totalMinutes / 60);
		const minutes = totalMinutes % 60;

		return { hours, minutes, seconds };
	};

	const countDownTimer = () => {
		const seconds = toSeconds(timeLeft);

		setState((prevState) => ({ ...prevState,
			timeLeft: toHoursAndMinutes(seconds - 1) }));
	};

	useEffect(() => {
		const interval = setInterval(countDownTimer, 1000);

		return () => clearInterval(interval);
	}, [toSeconds(timeLeft)]);

	return <div>
		Time remaining {timeLeft.hours}: {timeLeft.minutes}: {timeLeft.seconds}

	</div>;
};

export default ShowTimer;
