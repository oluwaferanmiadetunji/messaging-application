import React, {useState, useEffect} from 'react';
import Routes from './components/routes';
import {ToastContainer} from 'react-toastify';
import {AuthContext} from './components/routes/Auth';
import jwtDecode from 'jwt-decode';

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

	useEffect(() => {
		const getDetails = () => {
			if (token) {
				const decodedToken = jwtDecode(token);
				if (decodedToken.exp * 1000 < Date.now()) {
					setStatus(false);
				} else {
					setStatus(true);
				}
			}
		};

		getDetails();
	}, [token]);

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
