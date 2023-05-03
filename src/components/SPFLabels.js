/* eslint-disable max-lines-per-function */
import React from 'react';
import ReactSpeedometer from 'react-d3-speedometer';
import SPFManager from '../services/SPFManager';

const SPFLabels = (context) => {
	const { state, setState } = context;
	const handleMouseClick = (event) => {
		SPFManager.updateLocalMousePos({ ...context, dataLocal: event });
	};

	return (
		<div>

			<div
				className="box box1"
				onClick={ handleMouseClick }
			/>
			<div className="box box2">

				<ReactSpeedometer
					width={ 500 }
					needleHeightRatio={ 0.9 }
					value={ SPFManager.findNeedlePosition(context) }
					currentValueText="Happiness Level"
					customSegmentLabels={ [
						{
							text: '50%',
							position: 'INSIDE',
							color: '#555',
						},
						{
							text: '75%',
							position: 'INSIDE',
							color: '#555',
						},
						{
							text: '90%',
							position: 'INSIDE',
							color: '#555',
							fontSize: '19px',
						},
						{
							text: '93%',
							position: 'INSIDE',
							color: '#555',
						},
						{
							text: '97%',
							position: 'INSIDE',
							color: '#555',
						},
						{
							text: '98%',
							position: 'INSIDE',
							color: '#555',
						},
						{
							text: '98.5%',
							position: 'INSIDE',
							color: '#555',
						},
						{
							text: '99%',
							position: 'INSIDE',
							color: '#555',
						},
					] }
					ringWidth={ 47 }
					needleTransitionDuration={ 3333 }
					needleTransition="easeElastic"
					needleColor="#90f2ff"
					textColor="#d8dee9"
					segments={ 8 }
				/>
			</div>
		</div>
	);
};

export default SPFLabels;
