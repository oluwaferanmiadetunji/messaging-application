import React, {useState} from 'react';
import Routes from './components/routes';
import {ToastContainer} from 'react-toastify';
import {UserContext} from './components/session';

function App() {
	const [userData, setUserData] = useState({
		token: undefined,
		user: undefined,
	});
	return (
		<UserContext.Provider value={{userData, setUserData}}>
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
		</UserContext.Provider>
	);
}

export default App;
