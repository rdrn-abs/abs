/* eslint-disable no-underscore-dangle */
import React, { useState } from 'react';
import './App.scss';
import Start from './components/Start';
import RedirectToLogin from 'components/RedirectToLogin';

const isUserLoggedIn = window.__st?.cid !== undefined;

const App = (context) => {
	const [state, setState] = useState({
		input: '',
		wordObject: {},
		scrambler: {},
		discount: { hasDiscount: false },
		isLoading: false,
	});
	const extendedContext = { ...context, state, setState };

	return !isUserLoggedIn
		? <Start { ...extendedContext }/>
		: <RedirectToLogin { ...context }/>;
};

export default App;
