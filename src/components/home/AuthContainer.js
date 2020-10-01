import React, {useState} from 'react';
import Login from './Login';
import ForgotPassword from './ForgotPassword';

const AuthContainer = () => {
	const [tab, setTab] = useState(0);
	return tab === 0 ? <Login setTab={setTab} /> : <ForgotPassword setTab={setTab} />;
};

export default AuthContainer;
