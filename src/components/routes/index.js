import React, {Suspense, lazy} from 'react';
import {Route, Switch, BrowserRouter as Router} from 'react-router-dom';
import Loader from '../loader';

const Home = lazy(() => import('../home' /* webpackChunkName: "Home Page" */));
const Login = lazy(() => import('../login' /* webpackChunkName: "Login Page" */));
const Register = lazy(() => import('../register' /* webpackChunkName: "register Page" */));

const Routes = () => (
	<Router>
		<Suspense fallback={<Loader/>}>
			<Switch>
				<Route exact path='/' component={Home} />
				<Route exact path='/signin' component={Login} />
				<Route exact path='/signup' component={Register} />
			</Switch>
		</Suspense>
	</Router>
);

export default Routes;
