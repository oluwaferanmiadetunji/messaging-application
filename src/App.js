import React, {useState, useEffect} from 'react';
import Routes from './components/routes';
import {ToastContainer} from 'react-toastify';
import {Context} from './components/utils/Context';
import jwtDecode from 'jwt-decode';
import socket from './components/api/Sockets';

function App() {
	const existingTokens = localStorage.getItem('tokens');
	const [authTokens, setAuthTokens] = useState(existingTokens);
	const [isLogged, setIsLogged] = useState(false);
	const [userData, setUserData] = useState({});
	const [allUsers, setAllUsers] = useState([]);
	const [currentRoom, setCurrentRoom] = useState('');
	const [recipient, SetRecipient] = useState('');
	const [chats, setChats] = useState([]);

	const token = localStorage.tokens;

	const setTokens = (data) => {
		localStorage.setItem('tokens', data);
		setAuthTokens(data);
	};

	const setLogin = () => {
		setIsLogged(true);
	};

	const setData = (data) => {
		setUserData(data);
	};

	const setUsers = (data) => {
		setAllUsers(data);
	};

	const setRoom = (data) => {
		setCurrentRoom(data);
	};

	const setRoomChats = (data) => {
		setChats([...chats, ...data]);
	};

	const setNewChats = (data) => {
		setChats([...chats, data]);
	};

	const setLogout = () => {
		localStorage.removeItem('tokens');
		setIsLogged(false);
		setUserData({});
	};

	const setUser = (data) => {
		SetRecipient(data);
	};

	const username = localStorage.username;

	useEffect(() => {
		const getDetails = () => {
			if (token) {
				const decodedToken = jwtDecode(token);
				if (decodedToken.exp * 1000 < Date.now()) {
					setLogout();
					socket.emit('offline', {username});
				} else {
					setLogin();
					socket.emit('online', {username});
					socket.on('profile', (data) => {
						setUserData(data);
					});
				}
			} else {
				socket.emit('offline', {username});
				setUserData({});
			}
		};

		getDetails();

		return () => {
			socket.emit('offline', {username});
			socket.emit('disconnect');

			socket.off();
		};
	}, [token, username]);

	return (
		<Context.Provider
			value={{
				authTokens,
				setAuthTokens: setTokens,
				isLogged,
				setLogin,
				userData,
				setUserData: setData,
				setLogout,
				allUsers,
				setAllUsers: setUsers,
				currentRoom,
				setCurrentRoom: setRoom,
				chats,
				setChats: setRoomChats,
				setNewChats,
				recipient,
				SetRecipient: setUser,
			}}
		>
			<ToastContainer
				position='top-center'
				autoClose={5000}
				hideProgressBar={false}
				newestOnTop={false}
				closeOnClick
				rtl={false}
				pauseOnFocusLoss
				draggable
				pauseOnHover
			/>
			<Routes />
		</Context.Provider>
	);
}

export default App;
