import React from 'react';
import {Route, Redirect} from 'react-router-dom';

function AuthRoutes({component: Component, ...rest}) {
	const isLogged = localStorage.isLogged ? localStorage.isLogged : false;
	return <Route {...rest} render={(props) => (isLogged ? <Redirect to='/chats' /> : <Component {...props} />)} />;
}

export default AuthRoutes;
