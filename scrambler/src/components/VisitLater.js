import React from 'react';

const VisitLater = ({ data: { value: { nextAvailableAt }}}) =>
	<div className="visitLater">
		<p className="visitLater-hour">
			Come back after <b>{nextAvailableAt}</b> hours
		</p>
		<div>Continue Shopping</div>
	</div>;

export default VisitLater;
