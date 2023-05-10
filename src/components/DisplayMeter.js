import { React, useEffect, useRef } from 'react';
import SPFDial from './SPFDial';
import MouseDetector from './MouseDetector';

const handleResize = (context) => {
	const { setState, data: container } = context;

	setState((prevState) => ({
		...prevState,
		containerProps: {
			width: container.current.clientWidth,
			height: container.current.clientWidth,
		},
	}));
};

const DisplayMeter = (context) => {
	const container = useRef();
	const handler = () => handleResize({ ...context, data: container });

	useEffect(() => {
		window.addEventListener('resize',	handler);
		handler();
	}, []);

	return (
		<div>
			<div 	ref={ container } className="dial-container">
				<SPFDial { ...context }/>
			</div>
			<MouseDetector { ...context }/>
		</div>
	);
};

export default DisplayMeter;
