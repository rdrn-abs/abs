import React, { useRef, useEffect, useState } from 'react';
import color from './color';
import Container from './Container';

const setCanvasImage = ({ canvasRef, imgRef, src }) => {
	const canvas = canvasRef.current;
	const context = canvas.getContext('2d', { willReadFrequently: true });
	const img = imgRef.current.firstChild;

	canvas.width = img.clientWidth;
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

// eslint-disable-next-line max-lines-per-function
const Mask = (props) => {
	const [state, setState] = useState({ width: 0, height: 0 });
	const { children, onChange = () => {}, style = {}} = props;
	const canvasRef = useRef(0);
	const imgRef = useRef(0);

	useEffect(() => {
		setCanvasImage({ ...props, canvasRef, imgRef });
		onChange({ ...state });
	}, [state]);

	const cOnChange = (data) => {
		setState({ ...state, ...data });
	};

	return (
		<Container onChange={ cOnChange }>
			<div ref={ imgRef } className="mask-container" { ...{ style } }>
				{ children }
				<canvas
					ref={ canvasRef }
					className="mask"
					onClick={ (evt) => {
						setState((prevState) => {
							const value = getColor(evt, canvasRef);

							onChange({ ...prevState, value });
							return { ...prevState, value };
						});
					} }
				/>
			</div>
		</Container>
	);
};

export default Mask;
