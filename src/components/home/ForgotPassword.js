import React, {useState} from 'react';
import Formloader from '../utils/Formloader';
import Button from 'react-bootstrap/Button';
import {makePostReq} from '../api/Api';
import Toast from '../utils/Toast';

const ForgotPassword = ({setTab}) => {
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
		<form onSubmit={handleSubmit} className='sign-in-form'>
			<h2 className='title'>Forgot Password</h2>
			<div className='input-field'>
				<input
					type='email'
					placeholder='Email Address...'
					value={email}
					onChange={({target}) => setEmail(target.value)}
				/>
			</div>

			<Button onClick={invalid ? null : handleSubmit} className={invalid ? 'btn disabled' : 'btn'}>
				{loading ? <Formloader /> : 'Submit'}
			</Button>
			<p className='redirect' onClick={() => setTab(0)}>
				Sign In?
			</p>
		</form>
	);
};
export default ForgotPassword;
