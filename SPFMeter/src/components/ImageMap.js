import React from 'react';
import Mask from './Mask';
import parent from '../images/dial6.png';
import SPFDial from './SPFDial';

const ImageMap = (context) => <div>

	<Mask src={ parent } { ...context }>
		<SPFDial { ...context }/>

	</Mask>
</div>
	;

export default ImageMap;
