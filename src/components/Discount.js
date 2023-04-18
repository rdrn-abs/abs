
import React from 'react';
const Discount = (context) => {
	const { config: { discountCode }} = context;

	return <div>
		<div>You got the discount</div>
		<div>{discountCode}</div>
		<h3>Play more!! Come back tomorrow for the new discount</h3>
	</div>;
};

export default Discount;
