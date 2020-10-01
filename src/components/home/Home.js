import React, {useState, useEffect} from 'react';
import Register from './Register';
import LoginImage from '../assets/svg/login.svg';
import RegisterImage from '../assets/svg/register.svg';
import AuthContainer from './AuthContainer';

const Home = () => {
	const [initialClass, setInitialClass] = useState('con');

	useEffect(() => {}, []);
	return (
		<div className={initialClass}>
			<div className='forms-container'>
				<div className='signin-signup'>
					<AuthContainer />
					<Register />
				</div>
			</div>

			<div className='panels-container'>
				<div className='panel left-panel'>
					<div className='content'>
						<h3>New here?</h3>
						<p>Create an account to get connected with friends</p>
						<button className='btn transparent' id='sign-up-btn' onClick={() => setInitialClass('con sign-up-mode')}>
							Sign up
						</button>
					</div>
					<img src={LoginImage} className='image' alt='' />
				</div>
				<div className='panel right-panel'>
					<div className='content'>
						<h3>Already have an account?</h3>
						<p>Happy to have you back.</p>
						<button className='btn transparent' id='sign-in-btn' onClick={() => setInitialClass('con')}>
							Sign in
						</button>
					</div>
					<img src={RegisterImage} className='image' alt='' />
				</div>
			</div>
		</div>
	);
};

export default Home;
