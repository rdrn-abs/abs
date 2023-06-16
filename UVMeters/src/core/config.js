const config = {
	segments: {
		UVBMeter:
		{
			'#ff471aff': {
				protection: '50%',
				spf: '2',
				angle: '-81deg',
			},
			'#fa6f1cff': {
				protection: '75%',
				spf: '4',
				angle: '-63deg',
			},
			'#f7961eff': {
				protection: '90%',
				spf: '10',
				angle: '-45deg',
			},
			'#f1ba20ff': {
				protection: '93%',
				spf: '15',
				angle: '-27deg',
			},
			'#ecdc22ff': {
				protection: '97%',
				spf: '30',
				angle: '-9deg',
			},
			'#d5e724ff': {
				protection: '97.5%',
				spf: '40',
				angle: '9deg',
			},
			'#aee329ff': {
				protection: '98%',
				spf: '50',
				angle: '27deg',
			},
			'#8bdc2bff': {
				protection: '98.3%',
				spf: '60',
				angle: '45deg',
			},
			'#6ad72cff': {
				protection: '98.5%',
				spf: '70',
				angle: '63deg',
			},
			'#4cd22eff': {
				protection: '99%',
				spf: '100',
				angle: '81deg',
			},
		},
		UVAMeter:
		{
			'#ff471aff': {
				pf: '+',
				joiningWord: ' of ',
				protection: ' 50 - 75%',
				angle: '-67.5deg',
			},
			'#f3a81fff': {
				pf: '++',
				joiningWord: ' of ',
				protection: ' 75 - 87.5%',
				angle: '-22.5deg',
			},
			'#d4e725ff': {
				pf: '+++',
				joiningWord: ' of ',
				protection: ' 87.5 - 93.5%',
				angle: '22.5deg',
			},
			'#7ada2cff': {
				pf: '++++',
				joiningWord: ' greater than ',
				protection: ' 93.75%',
				angle: '67.5deg',
			},
		},
	},
};

export default config;
