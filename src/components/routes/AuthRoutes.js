import React from 'react';
import {Route, Redirect} from 'react-router-dom';
import {useAuth} from './Auth';
import {HOME} from './constants';

function AuthRoutes({component: Component, ...rest}) {
	const {authTokens} = useAuth();

	return <Route {...rest} render={(props) => (authTokens ? <Redirect to={HOME} /> : <Component {...props} />)} />;
}

export default AuthRoutes;
