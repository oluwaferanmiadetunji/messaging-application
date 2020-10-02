import React, {useState, useEffect} from 'react';
import Routes from './routes';
import {ToastContainer} from 'react-toastify';
import jwtDecode from 'jwt-decode';
import {AuthContext} from './contexts/AuthContext';
import Socket from './utils/sockets';

function App() {
	const existingTokens = localStorage.getItem('tokens');
	const [authTokens, setAuthTokens] = useState(existingTokens);
	const [userData, setUserData] = useState({});

	const token = localStorage.tokens;
	const username = localStorage.username;

	const setTokens = (data) => {
		localStorage.setItem('tokens', data);
		setAuthTokens(data);
	};

	const setData = (data) => {
		setUserData(data);
	};

	useEffect(() => {
		const getDetails = () => {
			if (token) {
				const decodedToken = jwtDecode(token);
				if (decodedToken.exp * 1000 < Date.now()) {
					localStorage.removeItem('isLogged');
					Socket.emit('offline', {username});
				} else {
					localStorage.setItem('isLogged', true);
					Socket.emit('online', {username});
					Socket.on('profile', (data) => {
						setUserData(data);
					});
				}
			} else {
				localStorage.removeItem('isLogged');
				Socket.emit('offline', {username});
			}
		};

		getDetails();

		return () => {
			Socket.emit('offline', {username});
			Socket.emit('disconnect');

			Socket.off();
		};
	}, [token, username]);

	return (
		<div className='App'>
			<AuthContext.Provider value={{authTokens, setAuthTokens: setTokens, userData, setUserData: setData}}>
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
		</div>
	);
}

export default App;
