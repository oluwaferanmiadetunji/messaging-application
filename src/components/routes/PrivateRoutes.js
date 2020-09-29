import React from 'react';
import {Route, Redirect} from 'react-router-dom';
import {useAuth} from './Auth';
import {LOGIN} from './constants';

function PrivateRoute({component: Component, ...rest}) {
	const {authTokens} = useAuth();
	return (
		<Route
			{...rest}
			render={(props) =>
				authTokens ? <Component {...props} /> : <Redirect to={{pathname: LOGIN, state: {referrer: props.location}}} />
			}
		/>
	);
}

export default PrivateRoute;
