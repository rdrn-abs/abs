import { React, useEffect, useRef } from 'react';
import SPFDial from './SPFDial';
import SPFManager from '../services/SPFManager';

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

	useEffect(() => {
		handleResize({ ...context, data: container });
		window.addEventListener('resize', SPFManager.handleResize);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<div className="">
			<div 	ref={ container } className="dial-container">
				<SPFDial{ ...context }/>
			</div>
			<div
				className="dial-container"
				onMouseDown={ (event) => SPFManager.updateLocalMousePos({
					...context, dataLocal: event,
				}) }
			/>
		</div>
	);
};

export default DisplayMeter;
