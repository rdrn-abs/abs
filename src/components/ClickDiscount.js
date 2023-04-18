import React from 'react';
import Discount from './Discount';
import ScramblerManager from '../services/scramblerManager';
import { peek } from '@laufire/utils/debug';

const ClickDiscount = (context) => {
	const { state: { discountShown }} = context;

	peek(discountShown);

	return <div>
		{!discountShown
			&& <button onClick={ () => ScramblerManager.showDiscount(context) }>
				Click here to claim your discount</button>}
		{discountShown && <Discount { ...context }/>}
	</div>;
};

export default ClickDiscount;
