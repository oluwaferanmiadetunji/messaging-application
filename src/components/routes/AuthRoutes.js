import React from 'react';
import {Route, Redirect} from 'react-router-dom';
import {Consumer} from './AuthContext';

const AuthRoutes = ({component: Component, ...rest}) => (
	<Consumer>
		{({isLogged}) => {
			return <Route {...rest} render={(props) => (isLogged === true ? <Redirect to='/' /> : <Component {...props} />)} />;
		}}
	</Consumer>
);

export default AuthRoutes;
