import React from 'react';
import {Route, Redirect} from 'react-router-dom';
import {useAuth} from './Auth';
import {PROFILE} from './constants';

function AuthRoutes({component: Component, ...rest}) {
	const {isLogged} = useAuth();

	return <Route {...rest} render={(props) => (isLogged ? <Redirect to={PROFILE} /> : <Component {...props} />)} />;
}

export default AuthRoutes;
