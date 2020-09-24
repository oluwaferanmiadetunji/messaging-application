/* eslint-disable no-useless-escape */
import React, {useState} from 'react';
import '../../assets/styles/auth.css';
import {Link} from 'react-router-dom';
import {FORGOT_PASSWORD, HOME, LOGIN} from '../routes/constants';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faEye} from '@fortawesome/free-solid-svg-icons';
import {Formloader} from '../loader';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

const eye = <FontAwesomeIcon icon={faEye} />;
const re = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

const Register = () => {
	const [name, setName] = useState('');
	const [username, setUsername] = useState('');
	const [email, setEmail] = useState('');
	const [password1, setPassword1] = useState('');
	const [password2, setPassword2] = useState('');
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState({});
	const [passwordShown, setPasswordShown] = useState(false);

	const togglePasswordVisiblity = () => {
		setPasswordShown(passwordShown ? false : true);
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		if (name.trim() === '') {
			setError({name: 'You must enter a name!'});
		} else if (username.trim() === '') {
			setError({username: 'You must enter a username!'});
		} else if (username.trim().length < 3) {
			setError({username: 'Username must be greater than 2 characters!'});
		} else if (email.trim() === '') {
			setError({email: 'You must enter an email address!'});
		} else if (!email.match(re)) {
			setError({email: 'You must enter a valid email!'});
		} else if (password1.trim() === '') {
			setError({password1: 'You must enter a password!'});
		} else if (password1.trim().length < 7) {
			setError({password1: 'Password must be greater than 6 characters'});
		} else if (password1.trim() !== password2.trim()) {
			setError({password1: "Passwords don't match!", password2: "Passwords don't match!"});
		} else {
			setLoading(true);
		}
	};

	return (
		<div className='main'>
			<div className='cover black'></div>
			<div className='container'>
				<Link exact to={HOME}>
					<h1 className='logo'>Mensaje</h1>
				</Link>
				<div className='content'>
					<div className='subscribe'>
						<h4>Sign Up</h4>

						<Form noValidate onSubmit={handleSubmit}>
							<Form.Row>
								<Form.Group className='form-group'>
									<Form.Label className='sr-only'>First name</Form.Label>
									<Form.Control
										type='text'
										placeholder='Full Name...'
										value={name}
										onChange={({target}) => setName(target.value)}
										className='form-control transparent'
										isInvalid={!!error.name}
									/>
									<Form.Control.Feedback type='invalid'>{error.name}</Form.Control.Feedback>
								</Form.Group>

								<Form.Group controlId='validationCustomUsername'>
									<Form.Label className='sr-only'>Username</Form.Label>
									<InputGroup>
										<InputGroup.Prepend>
											<InputGroup.Text id='inputGroupPrepend'>@</InputGroup.Text>
										</InputGroup.Prepend>
										<Form.Control
											type='text'
											className='form-control transparent'
											placeholder='Username...'
											value={username}
											onChange={({target}) => setUsername(target.value)}
											aria-describedby='inputGroupPrepend'
											isInvalid={!!error.username}
										/>
										<Form.Control.Feedback type='invalid'>{error.username}</Form.Control.Feedback>
									</InputGroup>
								</Form.Group>

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
										value={password1}
										onChange={({target}) => setPassword1(target.value)}
										isInvalid={!!error.password1}
									/>
									<i onClick={togglePasswordVisiblity}>{eye}</i>
									<Form.Control.Feedback type='invalid'>{error.password1}</Form.Control.Feedback>
								</Form.Group>

								<Form.Group controlId='validationCustom02'>
									<Form.Label className='sr-only'>Password</Form.Label>
									<Form.Control
										type={passwordShown ? 'text' : 'password'}
										className='form-control transparent'
										placeholder='Password again...'
										value={password2}
										onChange={({target}) => setPassword2(target.value)}
										isInvalid={!!error.password2}
									/>
									<i onClick={togglePasswordVisiblity}>{eye}</i>
									<Form.Control.Feedback type='invalid'>{error.password2}</Form.Control.Feedback>
								</Form.Group>
							</Form.Row>

							<Button type='submit' className='btn' disabled={!!loading}>
								{loading ? <Formloader /> : 'Sign Up'}
							</Button>
							<Link exact to={LOGIN}>
								<p className='text-right'>Already have an account?</p>
							</Link>
							<Link exact to={FORGOT_PASSWORD}>
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
