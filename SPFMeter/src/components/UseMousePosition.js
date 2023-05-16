
import { useEffect } from 'react';

const useMousePosition = ({ state, setState }) => {
	useEffect(() => {
		const updateMousePosition = (event) => {
			setState({
				...state,
				globalMouse: { x: event.clientX, y: event.clientY },

			});
		};

		window.addEventListener('mousemove', updateMousePosition);
		return () => {
			window.removeEventListener('mousemove', updateMousePosition);
		};
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);
	return state;
};

export default useMousePosition;
