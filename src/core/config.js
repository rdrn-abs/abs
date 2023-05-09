const config = {
	paddingForLabel: 20,
	maxDialValue: 160,
	spfDictionary: [
		{ segment: 12.5, protection: '50%', spf: '2' },
		{ segment: 25, protection: '75%', spf: '4' },
		{ segment: 37.5, protection: '90%', spf: ' 10' },
		{ segment: 50, protection: '93%', spf: '15' },
		{ segment: 62.5, protection: '97%', spf: '30' },
		{ segment: 75, protection: '98%', spf: '50' },
		{ segment: 87.5, protection: '98.5%', spf: '70' },
		{ segment: 100, protection: '99%', spf: '100' },
	],
	customLabels: [
		{
			text: ' 2',
			position: 'OUTSIDE',
			color: '#212121',
			fontSize: '19px',

		},
		{
			text: '4 ',
			position: 'OUTSIDE',
			color: '#212121',
			fontSize: '19px',
		},
		{
			text: '10',
			position: 'OUTSIDE',
			color: '#212121',
			fontSize: '19px',
		},
		{
			text: '15',
			position: 'OUTSIDE',
			color: '#212121',
			fontSize: '19px',

		},
		{
			text: '30',
			position: 'OUTSIDE',
			color: '#212121',
			fontSize: '19px',
		},
		{
			text: ' 50',
			position: 'OUTSIDE',
			color: '#212121',
			fontSize: '19px',
		},
		{
			text: '70',
			position: 'OUTSIDE',
			color: '#212121',
			fontSize: '19px',
		},

		{
			text: ' 100',
			position: 'OUTSIDE',
			color: '#212121',
			fontSize: '19px',
		},
	],

};

export default config;
