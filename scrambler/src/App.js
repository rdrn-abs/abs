/* eslint-disable no-underscore-dangle */
import React, { useState } from 'react';
import './App.scss';
import Start from './components/Start';

const isUserLoggedIn = window.__st?.cid !== undefined;

const App = (context) => {
	const [state, setState] = useState({
		input: '',
		wordObject: {},
		scrambler: {},
		discount: { hasDiscount: false },
	});
	const extendedContext = { ...context, state, setState };

	return !isUserLoggedIn
		? <Start { ...extendedContext }/>
		: <div><a href={ process.env.REACT_APP_LOGIN_URL }>login</a></div>;
};

export default App;
