import React from 'react';
import Routes from './components/routes';
import {ToastContainer} from 'react-toastify';

function App() {
	return (
		<>
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
		</>
	);
}

export default App;
