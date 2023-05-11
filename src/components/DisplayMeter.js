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
	const extendedContext = { ...context, data: container };
	const handler = () => handleResize(extendedContext);

	useEffect(() => {
		window.addEventListener('resize',	handler);
		handler();
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<div>
			<SPFDial { ...extendedContext }/>
			<MouseDetector { ...context }/>
		</div>
	);
};

export default DisplayMeter;
