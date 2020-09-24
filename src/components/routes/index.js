import React, {Suspense, lazy} from 'react';
import {Route, Switch, BrowserRouter as Router} from 'react-router-dom';

const Home = lazy(() => import('../home' /* webpackChunkName: "Home Page" */));

const Routes = () => (
	<Router>
		<Suspense fallback={<p></p>}>
			<Switch>
				<Route exact path='/' component={Home} />
			</Switch>
		</Suspense>
	</Router>
);

export default Routes;
