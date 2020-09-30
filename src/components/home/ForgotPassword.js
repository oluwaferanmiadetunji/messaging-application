import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import Formloader from '../utils/Formloader';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {makePostReq} from '../api/Api';
import Toast from '../utils/Toast';

const ForgotPassword = () => {
	const [email, setEmail] = useState('');
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState({});

	const handleSubmit = async (event) => {
		event.preventDefault();
		if (email.trim() === '') {
			setError({email: 'You must enter an email address!'});
		} else {
			setLoading(true);
			const {status, message} = await makePostReq('user/reset-password', {email});
			Toast(status, message);
			setLoading(false);
		}
	};

	return (
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
			</Form.Row>

			<Button type='submit' className='btn' disabled={!!loading}>
				{loading ? <Formloader /> : 'Submit'}
			</Button>
			<Link to='/'>
				<p className='text-right'>Sign In?</p>
			</Link>
			<Link to='/'>
				<p className='text-right'>Don't have an account?</p>
			</Link>
		</Form>
	);
};
export default ForgotPassword;
