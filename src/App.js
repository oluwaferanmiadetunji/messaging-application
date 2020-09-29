import React from 'react';
import Routes from './components/routes';
import {ToastContainer} from 'react-toastify';
import {Provider} from './components/routes/AuthContext';

function App() {
	return (
		<Provider>
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
		</Provider>
	);
}

export default App;
