import React, {Suspense, lazy} from 'react';
import {Route, Switch, BrowserRouter as Router} from 'react-router-dom';
import {Loader} from '../loader';
import {FORGOT_PASSWORD, HOME, LOGIN, REGISTER, CHATS} from './constants';
import AuthRoutes from './AuthRoutes';
import {Consumer} from './AuthContext';

const Home = lazy(() => import('../home' /* webpackChunkName: "Home Page" */));
const Login = lazy(() => import('../login' /* webpackChunkName: "Login Page" */));
const Register = lazy(() => import('../register' /* webpackChunkName: "Register Page" */));
const ForgotPassword = lazy(() => import('../forgotPassword' /* webpackChunkName: "Forgot Password Page" */));
const Chats = lazy(() => import('../chats' /* webpackChunkName: "Chats Page" */));

const Routes = () => {
	return (
		<Consumer>
			{(context) => (
				<Router>
					<Suspense fallback={<Loader />}>
						<Switch>
							<Route exact path={HOME} component={Home} text={context} />
							<AuthRoutes exact path={LOGIN} component={Login} />
							<AuthRoutes exact path={REGISTER} component={Register} />
							<AuthRoutes exact path={FORGOT_PASSWORD} component={ForgotPassword} />
							<Route exact path={CHATS} component={Chats} />
						</Switch>
					</Suspense>
				</Router>
			)}
		</Consumer>
	);
};

export default Routes;
