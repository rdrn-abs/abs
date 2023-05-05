const config = {
	meterWidth: 500,
	paddingForLabel: 20,
	spfDictionary: [
		{ segment: 12.5, protection: '50%', spf: '2' },
		{ segment: 25, protection: '75%', spf: '4' },
		{ segment: 37.5, protection: '90%', spf: ' 10' },
		{ segment: 50, protection: '93%', spf: '15' },
		{ segment: 67.5, protection: '97%', spf: '30' },
		{ segment: 75, protection: '98%', spf: '50' },
		{ segment: 87.5, protection: '98.5%', spf: '70' },
		{ segment: 100, protection: '99%', spf: '100' },
	],
	customLabels: [
		{
			text: '0 - 2',
			position: 'OUTSIDE',
			color: '#555',
			fontSize: '19px',

		},
		{
			text: '3 - 4',
			position: 'OUTSIDE',
			color: '#555',
			fontSize: '19px',
		},
		{
			text: '5 - 10',
			position: 'OUTSIDE',
			color: '#555',
			fontSize: '19px',
		},
		{
			text: '11 - 15',
			position: 'OUTSIDE',
			color: '#555',
			fontSize: '19px',

		},
		{
			text: '16 - 30',
			position: 'OUTSIDE',
			color: '#555',
			fontSize: '19px',
		},
		{
			text: '30 - 50',
			position: 'OUTSIDE',
			color: '#555',
			fontSize: '19px',
		},
		{
			text: '51 - 70',
			position: 'OUTSIDE',
			color: '#555',
			fontSize: '19px',
		},

		{
			text: '71 - 100',
			position: 'OUTSIDE',
			color: '#555',
			fontSize: '19px',
		},
	],

};

export default config;
