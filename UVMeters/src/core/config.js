const config = {
	spfDictionary: [
		{ segment: 12.5, protection: '50%', spf: '2',
			imgColor: '#ff471aff', angle: '-78.75deg' },
		{ segment: 25, protection: '75%', spf: '4',
			imgColor: '#f97a1dff', angle: '-56.25deg' },
		{ segment: 37.5, protection: '90%', spf: ' 10',
			imgColor: '#f3a81fff', angle: '-33.75deg' },
		{ segment: 50, protection: '93%', spf: '15',
			imgColor: '#edd322ff', angle: '-11.25deg' },
		{ segment: 62.5, protection: '97%', spf: '30',
			imgColor: '#d4e725ff', angle: '11.25deg' },
		{ segment: 75, protection: '98%', spf: '50',
			imgColor: '#a5e028ff', angle: '33.75deg' },
		{ segment: 87.5, protection: '56.5%', spf: '70',
			imgColor: '#7ada2cff', angle: '56.25deg' },
		{ segment: 100, protection: '99%', spf: '100',
			imgColor: '#54d32fff', angle: '78.75deg' },
	],
	UVA: [
		{ pf: '+', protection: '50-75%', imgColor: '#ff471aff' },
		{ pf: '++', protection: '75-87.5%', imgColor: '#ff471aff' },
		{ pf: '+++', protection: '87.5-93.5%', imgColor: '#ff471aff' },
		{ pf: '++++', protection: 'greater than 93.75%',
			imgColor: '#ff471aff' },
	],

};

export default config;
