import React, {useState} from 'react';
import Routes from './components/routes';
import {ToastContainer} from 'react-toastify';
import {AuthContext} from './components/routes/Auth';

function App() {
	const existingTokens = JSON.parse(localStorage.getItem('tokens'));
	const [authTokens, setAuthTokens] = useState(existingTokens);
	const [isLogged, setIsLogged] = useState(false);

	const setTokens = (data) => {
		localStorage.setItem('tokens', JSON.stringify(data));
		setAuthTokens(data);
	};

	const setStatus = (value) => {
		setIsLogged(value);
	};

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
