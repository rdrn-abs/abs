const config = {
	segments: {
		UVB:
		{
			'#ff471aff': {
				protection: '50%', spf: '2',
				angle: '-81deg',
			},
			'#fa701cff': {
				protection: '75%', spf: '4',
				angle: '-63deg',
			},
			'#f6961eff': {
				protection: '90%', spf: '10',
				angle: '-45deg',
			},
			'#f1ba20ff': {
				protection: '93%', spf: '15',
				angle: '-27deg',
			},
			'#ecdb23ff': {
				protection: '97%', spf: '30',
				angle: '-9deg',
			},
			'#d4e725ff': {
				protection: '97.5%', spf: '40',
				angle: '9deg',
			},
			'#aee228ff': {
				protection: '98%', spf: '50',
				angle: '27deg',
			},
			'#8bdc2aff': {
				protection: '98.3%', spf: '60',
				angle: '45deg',
			},
			'#6ad72dff': {
				protection: '98.5%', spf: '70',
				angle: '63deg',
			},
			'#4dd230ff': {
				protection: '99%', spf: '100',
				angle: '81deg',
			},
		},
		UVA:
		{
			'#ff471aff': {
				pf: '+', protection: 'of 50 - 75%',
				angle: '-67.5deg',
			},
			'#f3a81fff': {
				pf: '++', protection: 'of 75 - 87.5%',
				angle: '-22.5deg',
			},
			'#d4e725ff': {
				pf: '+++', protection: 'of 87.5 - 93.5%',
				angle: '22.5deg',
			},
			'#7ada2cff': {
				pf: '++++', protection: 'greater than 93.75%',
				angle: '67.5deg',
			},
		},
	},
};

export default config;
