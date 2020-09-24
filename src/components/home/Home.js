/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import './style.css';

const Home = () => {
	return (
		<div className='main'>
			<div className='cover black'></div>
			<div className='container'>
				<h1 className='logo'>Mensaje</h1>
				<div className='content'>
					<h4 className='motto'>A better way to connect and communicate with friends.</h4>
					<div className='subscribe'>
						<h5 className='info-text'>Get started now.</h5>
						<div className='buttons'>
							<button className='btn'>Sign In</button>
							<button className='btn'>Sign Up</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
export default Home;
