import React from 'react';
import {Route, Redirect} from 'react-router-dom';

function PrivateRoute({component: Component, ...rest}) {
	const isLogged = localStorage.isLogged ? localStorage.isLogged : false;
	return <Route {...rest} render={(props) => (isLogged ? <Component {...props} /> : <Redirect to='/' />)} />;
}

export default PrivateRoute;
