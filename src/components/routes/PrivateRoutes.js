import React from 'react';
import {Route, Redirect} from 'react-router-dom';
import {useAuth} from './Auth';
import {LOGIN} from './constants';
import {makeGetReq} from '../api';

function PrivateRoute({component: Component, ...rest}) {
	const {isLogged} = useAuth();

	makeGetReq('user/profile')
		.then((data) => {
			console.log(data);
		})
		.catch((err) => {
			console.log(err);
		});
	return (
		<Route
			{...rest}
			render={(props) =>
				isLogged ? <Component {...props} /> : <Redirect to={{pathname: LOGIN, state: {referrer: props.location}}} />
			}
		/>
	);
}

export default PrivateRoute;
