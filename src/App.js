import React, {useState, useEffect, useCallback} from 'react';
import Routes from './components/routes';
import {ToastContainer} from 'react-toastify';
import {AuthContext} from './components/routes/Auth';
import jwtDecode from 'jwt-decode';

function App() {
	const existingTokens = JSON.parse(localStorage.getItem('tokens'));
	const [authTokens, setAuthTokens] = useState(existingTokens);
	const [isLogged, setIsLogged] = useState(false);

	const token = localStorage.tokens;

	const setTokens = (data) => {
		localStorage.setItem('tokens', JSON.stringify(data));
		setAuthTokens(data);
	};

	const setStatus = (value) => {
		setIsLogged(value);
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
		<AuthContext.Provider value={{authTokens, setAuthTokens: setTokens, isLogged, setIsLogged: setStatus}}>
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
