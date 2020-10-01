/* eslint-disable no-useless-escape */
import React, {useState} from 'react';
import {useHistory} from 'react-router-dom';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faEye} from '@fortawesome/free-solid-svg-icons';
import Formloader from '../utils/Formloader';
import Button from 'react-bootstrap/Button';
import {makePostReq} from '../api/Api';
import Toast from '../utils/Toast';
import {useAppContext} from '../utils/Context';
import {RECENT} from '../routes/constants';

const eye = <FontAwesomeIcon icon={faEye} />;
const re = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
const letters = /^[A-Za-z]+$/;

const Register = () => {
	const history = useHistory();
	const [name, setName] = useState('');
	const [username, setUsername] = useState('');
	const [email, setEmail] = useState('');
	const [password1, setPassword1] = useState('');
	const [password2, setPassword2] = useState('');
	const [loading, setLoading] = useState(false);
	const [passwordShown, setPasswordShown] = useState(false);
	const {setAuthTokens, setUserData, setLogin} = useAppContext();

	const togglePasswordVisiblity = () => {
		setPasswordShown(passwordShown ? false : true);
	};

	const handleSubmit = async (event) => {
		event.preventDefault();
		if (username.trim().length < 3) {
			Toast('error', 'Username must be greater than 2 characters!');
		} else if (!username.match(letters)) {
			Toast('error', 'Username can contain only letters!');
		} else if (!email.match(re)) {
			Toast('error', 'You must enter a valid email!');
		} else if (password1.trim().length < 7) {
			Toast('error', 'Password must be greater than 6 characters');
		} else if (password1.trim() !== password2.trim()) {
			Toast('error', "Passwords don't match!");
		} else {
			setLoading(true);
			const {status, data, message} = await makePostReq('user/register', {
				name,
				username: username.split(' ')[0].toLowerCase(),
				email,
				password: password1,
			});
			setLoading(false);
			Toast(status, message);
			if (status === 'ok') {
				const token = `Bearer ${data.token}`;
				setAuthTokens(token);
				setUserData(data.userData);
				localStorage.setItem('username', data.userData.username);
				setLogin();
				history.push(RECENT);
			}
		}
	};

	const invalid = !!loading || !name || !username || !email || !password1 || !password2;

	return (
		<form action='#' className='sign-up-form'>
			<h2 className='title'>Create An Account</h2>
			<div className='input-field'>
				<input type='text' placeholder='Full Name...' value={name} onChange={({target}) => setName(target.value)} />
			</div>
			<div className='input-field'>
				<input type='text' placeholder='Userame...' value={username} onChange={({target}) => setUsername(target.value)} />
			</div>
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
					value={password1}
					onChange={({target}) => setPassword1(target.value)}
				/>
				<i onClick={togglePasswordVisiblity}>{eye}</i>
			</div>
			<div className='input-field'>
				<input
					type={passwordShown ? 'text' : 'password'}
					placeholder='Password'
					value={password2}
					onChange={({target}) => setPassword2(target.value)}
				/>
				<i onClick={togglePasswordVisiblity}>{eye}</i>
			</div>
			<Button onClick={invalid ? null : handleSubmit} className={invalid ? 'btn disabled' : 'btn'}>
				{loading ? <Formloader /> : 'Sign Up'}
			</Button>
		</form>
	);
};
export default Register;
