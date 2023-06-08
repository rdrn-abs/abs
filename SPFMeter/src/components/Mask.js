import React, { useRef, useEffect } from 'react';
import color from '../helper/color';
import { peek } from '@laufire/utils/debug';
import { find } from '@laufire/utils/collection';

const setCanvasImage = ({ canvasRef, imgRef, src }) => {
	const canvas = canvasRef.current;
	const context = canvas.getContext('2d', { willReadFrequently: true });
	const img = imgRef.current.firstChild.firstChild;

	canvas.width = peek(img.clientWidth);
	canvas.height = img.clientHeight;

	const image = new Image();

	image.onload = () => {
		context.drawImage(
			image, 0, 0, img.clientWidth, img.clientHeight
		);
	};
	image.src = src;
};

const getColor = (evt, canvasRef) => {
	const canvas = canvasRef.current;
	const context = canvas.getContext('2d', { willReadFrequently: true });
	const rect = canvas.getBoundingClientRect();
	const x = evt.clientX - rect.left;
	const y = evt.clientY - rect.top;
	const { data } = context.getImageData(
		x, y, 1, 1
	);

	return color.rgbToHex(data);
};
const getRegion = (context, gotColor) => {
	const { config: { spfDictionary }} = context;
	const segment = find(spfDictionary, ({ imgColor }) =>
		imgColor === gotColor);

	const rt = segment
		? peek(segment.spf, 'spf')
		: peek('not defined');

	return rt;
};
const handleResize = (context) => {
	setCanvasImage(context);
};

// eslint-disable-next-line max-lines-per-function
const Mask = (context) => {
	const { children, style = {}} = context;
	const canvasRef = useRef(null);
	const imgRef = useRef(null);

	const handler = () => handleResize({ ...context, canvasRef, imgRef });

	useEffect(() => {
		window.addEventListener('resize',	handler);
		handler();
	}, []);

	return (
		<div ref={ imgRef } { ...{ style } } className="parent">
			{children }
			<canvas
				ref={ canvasRef }
				className="mask"
				onClick={ (evt) => {
					getRegion(context, getColor(evt, canvasRef));
				} }
			/>
		</div>
	);
};

export default Mask;
