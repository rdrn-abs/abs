import React, { useEffect } from 'react';
import ScrambleManager from '../services/scrambleManager';

const ShowTimer = (context) => {
	const { state: { timeLeft }, setState } = context;
	const milliSeconds = 1000;

	const countDownTimer = () => {
		const seconds = ScrambleManager.toSeconds(timeLeft);

		setState((prevState) => ({ ...prevState,
			timeLeft: ScrambleManager.toHoursAndMinutes(seconds - 1) }));
	};

	useEffect(() => {
		const interval = setInterval(countDownTimer, milliSeconds);

		return () => clearInterval(interval);
	}, [ScrambleManager.toSeconds(timeLeft)]);

	return <div>
		Time remaining {timeLeft.hours}: {timeLeft.minutes}: {timeLeft.seconds}

	</div>;
};

export default ShowTimer;
