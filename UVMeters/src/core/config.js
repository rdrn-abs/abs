const config = {
	segments: {
		UVB:
		{
			'#ff471aff': { segment: 12.5, protection: '50%', spf: '2',
				angle: '-78.75deg' },
			'#f97a1dff': { segment: 25, protection: '75%', spf: '4',
				angle: '-56.25deg' },
			'#f3a81fff': { segment: 37.5, protection: '90%', spf: ' 10',
				angle: '-33.75deg' },
			'#edd322ff': { segment: 50, protection: '93%', spf: '15',
				angle: '-11.25deg' },
			'#d4e725ff': { segment: 62.5, protection: '97%', spf: '30',
				angle: '11.25deg' },
			'#a5e028ff': { segment: 75, protection: '98%', spf: '50',
				angle: '33.75deg' },
			'#7ada2cff': { segment: 87.5, protection: '56.5%', spf: '70',
				angle: '56.25deg' },
			'#54d32fff': { segment: 100, protection: '99%', spf: '100',
				angle: '78.75deg' },
		},
		UVA:
		{
			'#ff471aff': { pf: '+', protection: 'of 50 - 75%',
				angle: '-67.5deg' },
			'#f3a81fff': { pf: '++', protection: 'of 75 - 87.5%',
				angle: '-22.5deg' },
			'#d4e725ff': { pf: '+++', protection: 'of 87.5 - 93.5%',
				angle: '22.5deg' },
			'#7ada2cff': { pf: '++++', protection: 'greater than 93.75%',
				angle: '67.5deg' },
		},
	},
};

export default config;
