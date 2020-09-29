import React, {useState, useEffect} from 'react';
import Routes from './components/routes';
import {ToastContainer} from 'react-toastify';
import {AuthContext} from './components/routes/Auth';
import jwtDecode from 'jwt-decode';
import {makeGetReq, URL} from './components/api';
import io from 'socket.io-client';

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

	const setStatus = (value) => {
		setIsLogged(value);
	};

	const setData = (data) => {
		setUserData(data);
	};

	const username = localStorage.username;

	useEffect(() => {
		socket = io(URL);
		const getDetails = () => {
			if (token) {
				const decodedToken = jwtDecode(token);
				if (decodedToken.exp * 1000 < Date.now()) {
					setStatus(false);
					socket.emit('offline', {username});
				} else {
					setStatus(true);
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
	}, [token, username]);

	return (
		<AuthContext.Provider
			value={{authTokens, setAuthTokens: setTokens, isLogged, setIsLogged: setStatus, userData, setUserData: setData}}
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
