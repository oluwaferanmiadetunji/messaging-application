import React, {Suspense, lazy} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Loader from '../utils/Loader';
import {HOME, CHATS, PROFILE, CHAT, ALLUSERS, RECENT} from './constants';
import AuthRoutes from './AuthRoutes';
import PrivateRoutes from './PrivateRoutes';

const Home = lazy(() => import('../home' /* webpackChunkName: "Home Page" */));
const Chats = lazy(() => import('../chats' /* webpackChunkName: "Chats Page" */));
const Profile = lazy(() => import('../profile' /* webpackChunkName: "Profile Page" */));
const Chat = lazy(() => import('../singleChat' /* webpackChunkName: "Chat Page" */));
const AllUsers = lazy(() => import('../users' /* webpackChunkName: "All Users Page" */));
const Recent = lazy(() => import('../recent' /* webpackChunkName: "Recent Page" */));

const Routes = () => {
	return (
		<Router>
			<Suspense fallback={<Loader />}>
				<Switch>
					<AuthRoutes exact path={HOME} component={Home} />
					<PrivateRoutes exact path={CHATS} component={Chats} />
					<PrivateRoutes exact path={PROFILE} component={Profile} />
					<PrivateRoutes exact path={CHAT} component={Chat} />
					<Route exact path={ALLUSERS} component={AllUsers} />
					<PrivateRoutes exact path={RECENT} component={Recent} />
				</Switch>
			</Suspense>
		</Router>
	);
};

export default Routes;
