import React, {Suspense, lazy} from 'react';
import {Route, Switch, BrowserRouter as Router} from 'react-router-dom';
import {Loader} from '../loader';
import {FORGOT_PASSWORD, HOME, LOGIN, REGISTER} from './constants';

const Home = lazy(() => import('../home' /* webpackChunkName: "Home Page" */));
const Login = lazy(() => import('../login' /* webpackChunkName: "Login Page" */));
const Register = lazy(() => import('../register' /* webpackChunkName: "Register Page" */));
const ForgotPassword = lazy(() => import('../forgotPassword' /* webpackChunkName: "Forgot Password Page" */));

const Routes = () => {
	return (
		<Router>
			<Suspense fallback={<Loader />}>
				<Switch>
					<Route exact path={HOME} component={Home} />
					<Route exact path={LOGIN} component={Login} />
					<Route exact path={REGISTER} component={Register} />
					<Route exact path={FORGOT_PASSWORD} component={ForgotPassword} />
				</Switch>
			</Suspense>
		</Router>
	);
};

export default Routes;
