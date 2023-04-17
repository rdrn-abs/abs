
import React from 'react';
const Discount = (context) => {
	const { state: { discountCode }} = context;

	return <div>
		<div>You got the discount</div>
		<div>{discountCode}</div>
	</div>;
};

export default Discount;
