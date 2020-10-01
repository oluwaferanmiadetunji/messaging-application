import React, {useState, useEffect} from 'react';
import Routes from './components/routes';
import {ToastContainer} from 'react-toastify';
import {AuthContext} from './components/routes/Auth';
import jwtDecode from 'jwt-decode';
import {makeGetReq} from './components/api/Api';
import socket from './components/api/Sockets';

function App() {
	const existingTokens = localStorage.getItem('tokens');
	const [authTokens, setAuthTokens] = useState(existingTokens);
	const [isLogged, setIsLogged] = useState(false);
	const [userData, setUserData] = useState({});
	const [allUsers, setAllUsers] = useState([]);

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

	const setLogout = () => {
		localStorage.removeItem('tokens');
		setIsLogged(false);
		setUserData({});
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
					makeGetReq('user/profile')
						.then(({data}) => {
							setUserData(data);
							socket.emit('online', {username});
						})
						.catch(() => {
							setUserData({});
						});
				}
			} else {
				socket.emit('offline', {username});
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
		<AuthContext.Provider
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
		</AuthContext.Provider>
	);
}

export default App;
