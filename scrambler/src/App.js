/* eslint-disable no-underscore-dangle */
import React, { useState } from 'react';
import './App.scss';
import Start from './components/Start';
import RedirectToLogin from 'components/RedirectToLogin';
import { isDefined } from '@laufire/utils/reflection';

const isUserLoggedIn = isDefined(window.__st?.cid);

const App = (context) => {
	const { seed: { initialState }} = context;
	const [state, setState] = useState(initialState);
	const extendedContext = { ...context, state, setState };
	const StartComponent = isUserLoggedIn ? Start : RedirectToLogin;

	return <StartComponent { ...extendedContext }/>;
};

export default App;
