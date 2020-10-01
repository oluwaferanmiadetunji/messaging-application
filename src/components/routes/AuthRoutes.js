import React from 'react';
import {Route, Redirect} from 'react-router-dom';
import {useAppContext} from '../utils/Context';
import {CHATS} from './constants';

function AuthRoutes({component: Component, ...rest}) {
	const {isLogged} = useAppContext();

	return <Route {...rest} render={(props) => (isLogged ? <Redirect to={CHATS} /> : <Component {...props} />)} />;
}

export default AuthRoutes;
