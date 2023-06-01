/* eslint-disable no-underscore-dangle */
import React, { useState } from 'react';
import './App.scss';
import RedirectToLogin from 'components/RedirectToLogin';
import Start from './components/Start';

const isUserLoggedIn = window.__st?.cid !== undefined;

const App = (context) => {
	const [state, setState] = useState({
		input: '',
		wordObject: {},
		discountShown: false,
		scrambler: {},
	});
	const extendedContext = { ...context, state, setState };
	const { config: { login }} = context;

	return !isUserLoggedIn
		? <Start { ...extendedContext }/>
		: <RedirectToLogin { ...{ link: login } }/>;
};

export default App;
