import React from 'react';

const VisitLater = ({ data: { value: { nextAvailableAt }}}) =>
	<div>Come back after { nextAvailableAt} hours </div>;

export default VisitLater;
