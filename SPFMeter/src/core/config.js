const config = {
	UVA: [
		{ pf: '+', protection: '50-75%', imgColor: '#ff471aff' },
		{ pf: '++', protection: '75-87.5%', imgColor: '#ff471aff' },
		{ pf: '+++', protection: '87.5-93.5%', imgColor: '#ff471aff' },
		{ pf: '++++', protection: 'greater than 93.75%',
			imgColor: '#ff471aff' },
	],
	UVALabels: [
		{
			text: '+',
			position: 'OUTSIDE',
			color: '#212121',
			fontSize: '30px',

		},
		{
			text: '++',
			position: 'OUTSIDE',
			color: '#212121',
			fontSize: '30px',
		},
		{
			text: '+++',
			position: 'OUTSIDE',
			color: '#212121',
			fontSize: '30px',
		},
		{
			text: '++++',
			position: 'OUTSIDE',
			color: '#212121',
			fontSize: '30px',
		},

	],
	paddingForLabel: 20,
	maxDialValue: 160,
	spfDictionary: [
		{ segment: 12.5, protection: '50%', spf: '2', imgColor: '#ff471aff' },
		{ segment: 25, protection: '75%', spf: '4', imgColor: '#f97a1dff' },
		{ segment: 37.5, protection: '90%', spf: ' 10', imgColor: '#f3a81fff' },
		{ segment: 50, protection: '93%', spf: '15', imgColor: '#edd322ff' },
		{ segment: 62.5, protection: '97%', spf: '30', imgColor: '#d4e725ff' },
		{ segment: 75, protection: '98%', spf: '50', imgColor: '#a5e028ff' },
		{ segment: 87.5, protection: '98.5%', spf: '70',
			imgColor: '#7ada2cff' },
		{ segment: 100, protection: '99%', spf: '100', imgColor: '#54d32fff' },
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
