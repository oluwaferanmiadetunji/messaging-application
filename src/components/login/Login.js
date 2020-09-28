import React, {useState} from 'react';
import '../../assets/styles/auth.css';
import {Link, useHistory} from 'react-router-dom';
import {FORGOT_PASSWORD, HOME, REGISTER} from '../routes/constants';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faEye} from '@fortawesome/free-solid-svg-icons';
import {Formloader} from '../loader';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {makePostReq} from '../api';
import {Toast} from '../loader';

const eye = <FontAwesomeIcon icon={faEye} />;

const Register = () => {
	const history = useHistory();
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState({});
	const [passwordShown, setPasswordShown] = useState(false);

	const togglePasswordVisiblity = () => {
		setPasswordShown(passwordShown ? false : true);
	};

	const handleSubmit = async (event) => {
		event.preventDefault();
		if (email.trim() === '') {
			setError({email: 'You must enter an email address!'});
		} else if (password.trim() === '') {
			setError({password: 'You must enter a password!'});
		} else {
			setLoading(true);
			const {status, message} = await makePostReq('user/login', {email, password});
			Toast(status, message);
			// if (status === 'ok') {
			// 	history.push('');
			// }
			setLoading(false);
		}
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
										isInvalid={!!error.email}
									/>
									<Form.Control.Feedback type='invalid'>{error.email}</Form.Control.Feedback>
								</Form.Group>

								<Form.Group controlId='validationCustom02'>
									<Form.Label className='sr-only'>Password</Form.Label>
									<Form.Control
										type={passwordShown ? 'text' : 'password'}
										className='form-control transparent'
										placeholder='Password...'
										value={password}
										onChange={({target}) => setPassword(target.value)}
										isInvalid={!!error.password}
									/>
									<i onClick={togglePasswordVisiblity}>{eye}</i>
									<Form.Control.Feedback type='invalid'>{error.password}</Form.Control.Feedback>
								</Form.Group>
							</Form.Row>

							<Button type='submit' className='btn' disabled={!!loading}>
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
export default Register;
