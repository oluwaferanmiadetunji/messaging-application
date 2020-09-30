import React, {useState, useEffect} from 'react';
import Routes from './components/routes';
import {ToastContainer} from 'react-toastify';
import {AuthContext} from './components/routes/Auth';
import jwtDecode from 'jwt-decode';
import io from 'socket.io-client';
import {config} from './constants';
import {makeGetReq} from './components/api';

let socket;

function App() {
	const existingTokens = localStorage.getItem('tokens');
	const [authTokens, setAuthTokens] = useState(existingTokens);
	const [isLogged, setIsLogged] = useState(false);
	const [userData, setUserData] = useState({});

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

	const setLogout = () => {
		localStorage.removeItem('tokens');
		setIsLogged(false);
		setUserData({});
	};

	const username = localStorage.username;

	useEffect(() => {
		socket = io(config.API_URL);
		const getDetails = () => {
			if (token) {
				const decodedToken = jwtDecode(token);
				if (decodedToken.exp * 1000 < Date.now()) {
					setLogin(false);
					socket.emit('offline', {username});
				} else {
					setLogin(true);
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
