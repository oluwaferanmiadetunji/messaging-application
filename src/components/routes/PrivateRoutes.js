import React from 'react';
import {Route, Redirect} from 'react-router-dom';
import {useAppContext} from '../utils/Context';
import {HOME} from './constants';

function PrivateRoute({component: Component, ...rest}) {
	const {isLogged} = useAppContext();

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
