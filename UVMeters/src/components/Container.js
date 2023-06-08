import React, { useEffect } from 'react';
import { useResizeDetector } from 'react-resize-detector';

const Container = ({ onChange = () => {}, children, ...args }) => {
	const { width, height, ref } = useResizeDetector();

	useEffect(() => {
		const orientation = width > height ? 'portrait' : 'landscape';

		onChange({ width, height, orientation });
	}, [width, height]);

	return (
		<div
			ref={ ref }
			className="container"
			{ ...args }
		>{ children }
		</div>
	);
};

export default Container;
