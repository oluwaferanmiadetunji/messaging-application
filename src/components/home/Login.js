import React, {useState} from 'react';
import {useHistory} from 'react-router-dom';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faEye} from '@fortawesome/free-solid-svg-icons';
import Formloader from '../utils/Formloader';
import Button from 'react-bootstrap/Button';
import {makePostReq} from '../api/Api';
import Toast from '../utils/Toast';
import {useAuth} from '../routes/Auth';
import {CHATS} from '../routes/constants';

const eye = <FontAwesomeIcon icon={faEye} />;

const Login = () => {
	const history = useHistory();
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [loading, setLoading] = useState(false);
	const [passwordShown, setPasswordShown] = useState(false);

	const {setAuthTokens, setUserData, setLogin} = useAuth();

	const togglePasswordVisiblity = () => {
		setPasswordShown(passwordShown ? false : true);
	};

	const handleSubmit = async (event) => {
		event.preventDefault();

		setLoading(true);
		const {status, message, data} = await makePostReq('user/login', {email, password});
		Toast(status, message);
		setLoading(false);
		if (status === 'ok') {
			const token = `Bearer ${data.token}`;
			setAuthTokens(token);
			setUserData(data.userData);
			localStorage.setItem('username', data.userData.username);
			setLogin();
			history.push(CHATS);
		}
	};

	const invalid = !!loading || email.trim() === '' || password.trim() === '';

	return (
		<form onSubmit={handleSubmit} className='sign-in-form'>
			<h2 className='title'>Welcome Back</h2>
			<p>Sign In to continue to your account</p>
			<div className='input-field'>
				<input
					type='email'
					placeholder='Email Address...'
					value={email}
					onChange={({target}) => setEmail(target.value)}
				/>
			</div>
			<div className='input-field'>
				<input
					type={passwordShown ? 'text' : 'password'}
					placeholder='Password'
					value={password}
					onChange={({target}) => setPassword(target.value)}
				/>
				<i onClick={togglePasswordVisiblity}>{eye}</i>
			</div>
			<Button onClick={invalid ? null : handleSubmit} className={invalid ? 'btn disabled' : 'btn'}>
				{loading ? <Formloader /> : 'Sign In'}
			</Button>
		</form>
	);
};
export default Login;
