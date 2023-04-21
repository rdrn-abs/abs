import React from 'react';
import Discount from './Discount';
import ScramblerManager from '../services/scramblerManager';
import { peek } from '@laufire/utils/debug';

const ClickDiscount = (context) => {
	const { state: { discountShown }} = context;

	peek(discountShown);

	return <div>
		{	!discountShown 	&& <button
			className="discount-btn"
			onClick={ () => ScramblerManager.showDiscount(context) }
		// eslint-disable-next-line react/jsx-closing-bracket-location
		>	Click here to claim your discount
		</button>}
		{discountShown && <Discount { ...context }/>}
	</div>;
};

export default ClickDiscount;
