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

const Login = ({setView}) => {
	const history = useHistory();
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [loading, setLoading] = useState(false);
	const [passwordShown, setPasswordShown] = useState(false);

	const {setAuthTokens, setUserData} = useAuthContext();

	const togglePasswordVisiblity = () => {
		setPasswordShown((prevState) => !prevState);
	};

	const invalid = !!loading || email.trim() === '' || password.trim() === '';

	const handleSubmit = async (event) => {
		event.preventDefault();

		setLoading(true);
		const {status, message, data} = await makePostReq('user/login', {email, password});
		// Toast(status, message);
		setLoading(false);
		if (status === 'ok') {
			const token = `Bearer ${data.token}`;
			setAuthTokens(token);
			setUserData(data.userData);
			localStorage.setItem('username', data.userData.username);
			localStorage.setItem('isLogged', true);
			history.push('/users');
		}
	};

	return (
		<Form noValidate onSubmit={handleSubmit}>
			<h3 className='title'>Welcome Back</h3>
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
						value={password}
						onChange={({target}) => setPassword(target.value)}
					/>
				</InputGroup>
			</Form.Group>

			<Button variant='primary' type='submit' disabled={invalid}>
				{loading ? <Formloader /> : 'Sign In'}
			</Button>
			<div className='links'>
				<p onClick={() => setView('register')}>Don't have an account?</p>
				<p onClick={() => setView('forgotPassword')}>Forgot Password?</p>
			</div>
		</Form>
	);
};

export default Login;
