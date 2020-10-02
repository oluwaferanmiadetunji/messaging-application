import React, {useState} from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Formloader from '../../loaders/Formloader';
import {makePostReq} from '../../utils/api';
import Toast from '../../utils/Toast';


const Login = ({setView}) => {
	const [email, setEmail] = useState('');
	const [loading, setLoading] = useState(false);

	const invalid = !!loading || email.trim() === '';

	const handleSubmit = async (event) => {
		event.preventDefault();

		setLoading(true);
		const {status, message} = await makePostReq('user/reset-password', {email});
		Toast(status, message);
		setLoading(false);
	};

	return (
		<Form noValidate onSubmit={handleSubmit}>
			<h3 className='title'>Forgot Password?</h3>
			<Form.Group>
				<Form.Label>Email address</Form.Label>
				<Form.Control
					type='email'
					placeholder='Enter Email'
					value={email}
					onChange={({target}) => setEmail(target.value)}
				/>
			</Form.Group>

			<Button variant='primary' type='submit' disabled={invalid}>
				{loading ? <Formloader /> : 'Submit'}
			</Button>
			<div className='links'>
				<p onClick={() => setView('login')}>Sign In?</p>
				<p onClick={() => setView('register')}>Don't have an account?</p>
			</div>
		</Form>
	);
};

export default Login;
