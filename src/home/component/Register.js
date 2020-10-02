/* eslint-disable no-useless-escape */
import React, {useState} from 'react';
import {useHistory} from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Formloader from '../../loaders/Formloader';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faEye} from '@fortawesome/free-solid-svg-icons';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import {makePostReq} from '../../utils/api';
import Toast from '../../utils/Toast';
import {useAuthContext} from '../../contexts/AuthContext';

const eye = <FontAwesomeIcon icon={faEye} />;

const Register = ({setView}) => {
	const history = useHistory();
	const [name, setName] = useState('');
	const [username, setUsername] = useState('');
	const [email, setEmail] = useState('');
	const [password1, setPassword1] = useState('');
	const [password2, setPassword2] = useState('');
	const [loading, setLoading] = useState(false);
	const [passwordShown, setPasswordShown] = useState(false);

	const {setAuthTokens, setUserData} = useAuthContext();

	const re = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
	const letters = /^[A-Za-z]+$/;

	const togglePasswordVisiblity = () => {
		setPasswordShown((prevState) => !prevState);
	};

	const invalid = !!loading || !name || !username || !email || !password1 || !password2;

	const handleSubmit = async (event) => {
		event.preventDefault();
		if (username.trim().length < 3) {
			Toast('error', 'Username must be more than 2 characters!');
		} else if (!username.match(letters)) {
			Toast('error', 'Username must not contain spaces or non-letter characters!');
		} else if (!email.match(re)) {
			Toast('error', 'You must enter a valid email!');
		} else if (password1.trim().length < 7) {
			Toast('error', 'Password must be greater than 6 characters');
		} else if (password1.trim() !== password2.trim()) {
			Toast('error', "Passwords don't match!");
		} else {
			setLoading(true);
			const {status, data,message } = await makePostReq('user/register', {
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
				localStorage.setItem('isLogged', true);
				history.push('/users');
			}
		}
	};

	return (
		<Form noValidate onSubmit={handleSubmit}>
			<h3 className='title'>Create An Account</h3>
			<Form.Group>
				<Form.Label>Email address</Form.Label>
				<Form.Control
					type='text'
					placeholder='Enter Full Name'
					value={name}
					onChange={({target}) => setName(target.value)}
				/>
			</Form.Group>
			<Form.Group>
				<Form.Label>Username</Form.Label>
				<Form.Control
					type='text'
					placeholder='Enter Username'
					value={username}
					onChange={({target}) => setUsername(target.value.toLowerCase())}
				/>
			</Form.Group>
			<Form.Group>
				<Form.Label>Email address</Form.Label>
				<Form.Control
					type='email'
					placeholder='Enter Email'
					value={email}
					onChange={({target}) => setEmail(target.value)}
				/>
			</Form.Group>

			<Form.Group>
				<Form.Label>Password</Form.Label>
				<InputGroup className='mb-2'>
					<InputGroup.Prepend>
						<InputGroup.Text>
							<i onClick={togglePasswordVisiblity}>{eye}</i>
						</InputGroup.Text>
					</InputGroup.Prepend>
					<FormControl
						placeholder='Password'
						type={passwordShown ? 'text' : 'password'}
						value={password1}
						onChange={({target}) => setPassword1(target.value)}
					/>
				</InputGroup>
			</Form.Group>
			<Form.Group>
				<Form.Label>Password Again</Form.Label>
				<InputGroup className='mb-2'>
					<InputGroup.Prepend>
						<InputGroup.Text>
							<i onClick={togglePasswordVisiblity}>{eye}</i>
						</InputGroup.Text>
					</InputGroup.Prepend>
					<FormControl
						placeholder='Password Again...'
						type={passwordShown ? 'text' : 'password'}
						value={password2}
						onChange={({target}) => setPassword2(target.value)}
					/>
				</InputGroup>
			</Form.Group>

			<Button variant='primary' type='submit' disabled={invalid}>
				{loading ? <Formloader /> : 'Sign Up'}
			</Button>
			<div className='links'>
				<p onClick={() => setView('login')}>Already have an account?</p>
				<p onClick={() => setView('forgotPassword')}>Forgot Password?</p>
			</div>
		</Form>
	);
};

export default Register;
