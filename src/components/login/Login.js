import React, {useState} from 'react';
import {Link, useHistory} from 'react-router-dom';
import {FORGOT_PASSWORD, HOME, CHATS, REGISTER} from '../routes/constants';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faEye} from '@fortawesome/free-solid-svg-icons';
import {Formloader} from '../loader';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {makePostReq} from '../api';
import {Toast} from '../loader';
import {useAuth} from '../routes/Auth';

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
		if (status === 'ok') {
			const token = `Bearer ${data.token}`;
			setAuthTokens(token);
			setUserData(data.userData);
			localStorage.setItem('username', data.userData.username);
			setLogin();
			history.push(CHATS);
		}
		setLoading(false);
	};

	return (
		<div className='main'>
			<div className='cover black'></div>
			<div className='container'>
				<Link to={HOME}>
					<h1 className='logo'>Mensaje</h1>
				</Link>
				<div className='content'>
					<div className='subscribe'>
						<h4>Sign In</h4>

						<Form noValidate onSubmit={handleSubmit}>
							<Form.Row>
								<Form.Group controlId='validationCustom02'>
									<Form.Label className='sr-only'>Email Address</Form.Label>
									<Form.Control
										type='email'
										className='form-control transparent'
										placeholder='Email Address...'
										value={email}
										onChange={({target}) => setEmail(target.value)}
									/>
								</Form.Group>

								<Form.Group controlId='validationCustom02'>
									<Form.Label className='sr-only'>Password</Form.Label>
									<Form.Control
										type={passwordShown ? 'text' : 'password'}
										className='form-control transparent'
										placeholder='Password...'
										value={password}
										onChange={({target}) => setPassword(target.value)}
									/>
									<i onClick={togglePasswordVisiblity}>{eye}</i>
								</Form.Group>
							</Form.Row>

							<Button
								type='submit'
								className='btn'
								disabled={!!loading || email.trim() === '' || password.trim() === ''}
							>
								{loading ? <Formloader /> : 'Sign In'}
							</Button>
							<Link to={REGISTER}>
								<p className='text-right'>Don't have an account?</p>
							</Link>
							<Link to={FORGOT_PASSWORD}>
								<p className='text-right'>Forgot password?</p>
							</Link>
						</Form>
					</div>
				</div>
			</div>
		</div>
	);
};
export default Login;
