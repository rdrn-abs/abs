const config = {
	UVA: [
		{ pf: '+', protection: '50-75%', imgColor: '#ff471aff' },
		{ pf: '++', protection: '75-87.5%', imgColor: '#ff471aff' },
		{ pf: '+++', protection: '87.5-93.5%', imgColor: '#ff471aff' },
		{
			pf: '++++', protection: 'greater than 93.75%',
			imgColor: '#ff471aff',
		},
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
		{ segment: 12.5, protection: '50%',
			spf: '2', imgColor: '#ff471a' },
		{ segment: 25, protection: '75%',
			spf: '4', imgColor: '#fa701c' },
		{ segment: 37.5, protection: '90%',
			spf: ' 10', imgColor: '#f6961e' },
		{ segment: 50, protection: '93%',
			spf: '15', imgColor: '#f1ba20' },
		{ segment: 62.5, protection: '97%',
			spf: '30', imgColor: '#ecdb23' },
		{ segment: 62.5, protection: '97.5%',
			spf: '40', imgColor: '#d4e725 ' },
		{ segment: 75, protection: '98%',
			spf: '50', imgColor: '#aee228' },
		{ segment: 62.5, protection: '98.3%',
			spf: '60', imgColor: '#8bdc2a ' },
		{ segment: 87.5, protection: '98.5%',
			spf: '70', imgColor: '#6ad72d'	},
		{ segment: 100, protection: '99%',
			spf: '100', imgColor: '#4dd230' },
	],
	customLabels: [
		{
			text: ' 2',
			position: 'OUTSIDE',
			color: '#212121',
			fontSize: '25px',

		},
		{
			text: '4 ',
			position: 'OUTSIDE',
			color: '#212121',
			fontSize: '25px',
		},
		{
			text: '10',
			position: 'OUTSIDE',
			color: '#212121',
			fontSize: '25px',
		},
		{
			text: '15',
			position: 'OUTSIDE',
			color: '#212121',
			fontSize: '25px',

		},
		{
			text: '30',
			position: 'OUTSIDE',
			color: '#212121',
			fontSize: '25px',
		},
		{
			text: '40',
			position: 'OUTSIDE',
			color: '#212121',
			fontSize: '25px',
		},
		{
			text: ' 50',
			position: 'OUTSIDE',
			color: '#212121',
			fontSize: '25px',
		},
		{
			text: '60',
			position: 'OUTSIDE',
			color: '#212121',
			fontSize: '25px',
		},
		{
			text: '70',
			position: 'OUTSIDE',
			color: '#212121',
			fontSize: '25px',
		},

		{
			text: ' 100',
			position: 'OUTSIDE',
			color: '#212121',
			fontSize: '25px',
		},
	],

};

export default config;
