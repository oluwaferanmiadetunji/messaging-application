import React from 'react';
import {Route, Redirect} from 'react-router-dom';
import {useAuth} from './Auth';
import {HOME} from './constants';

function PrivateRoute({component: Component, ...rest}) {
	const {isLogged} = useAuth();

	return (
		<Route
			{...rest}
			render={(props) =>
				isLogged ? <Component {...props} /> : <Redirect to={{pathname: HOME, state: {referrer: props.location}}} />
			}
		/>
	);
}

export default PrivateRoute;
