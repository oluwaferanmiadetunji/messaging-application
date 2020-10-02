import React, {Suspense, lazy, useState} from 'react';
import {BrowserRouter as Router, Switch} from 'react-router-dom';
import PageLoader from '../loaders/PageLoader';
import {DataContext} from '../contexts/DataContext';
import AuthRoutes from './AuthRoutes';
import PrivateRoutes from './PrivateRoutes';

const Home = lazy(() => import('../home' /* webpackChunkName: "Home Page" */));
const Chats = lazy(() => import('../chats' /* webpackChunkName: "Chats Page" */));
const Profile = lazy(() => import('../profile' /* webpackChunkName: "Profile Page" */));
const Users = lazy(() => import('../users' /* webpackChunkName: "Users Page" */));
const Chat = lazy(() => import('../singleChat' /* webpackChunkName: "Single Chat Page" */));

const Routes = () => {
	const [allUsers, setAllUsers] = useState([]);
	const [currentRoom, setCurrentRoom] = useState('');
	const [recipient, SetRecipient] = useState({});
	const [chats, setChats] = useState([]);
	const [recentChats, setRecentChats] = useState([]);

	const setUsers = (data) => {
		setAllUsers(data);
	};

	const setRecent = (data) => {
		setRecentChats(data);
	};

	const setRoom = (data) => {
		setCurrentRoom(data);
	};

	const setRoomChats = (data) => {
		setChats([...chats, data]);
	};

	const setNewChats = (data) => {
		setChats(data);
	};

	const setUser = (data) => {
		SetRecipient(data);
	};

	return (
		<DataContext.Provider
			value={{
				allUsers,
				setAllUsers: setUsers,
				currentRoom,
				setCurrentRoom: setRoom,
				chats,
				setChats: setRoomChats,
				setNewChats,
				recipient,
				SetRecipient: setUser,
				setRecentChats: setRecent,
				recentChats,
			}}
		>
			<Router>
				<Suspense fallback={<PageLoader />}>
					<Switch>
						<PrivateRoutes exact path='/chats' component={Chats} />
						<PrivateRoutes exact path='/:username/profile' component={Profile} />
						<PrivateRoutes exact path='/users' component={Users} />
						<PrivateRoutes exact path='/:username/chats' component={Chat} />
						<AuthRoutes exact path='/' component={Home} />
					</Switch>
				</Suspense>
			</Router>
		</DataContext.Provider>
	);
};

export default Routes;
