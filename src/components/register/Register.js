import React from 'react';
import '../../assets/styles/register.css';
import {Link} from 'react-router-dom';

const Home = () => {
	return (
		<div className='main'>
			<div className='cover black'></div>
			<div className='container'>
				<Link exact to='/'>
					<h1 className='logo'>Mensaje</h1>
				</Link>
				<div className='content'>
					<h4 className='motto'>A better way to connect and communicate with friends.</h4>
					<div className='subscribe'>
						<h5 className='info-text'>Get started now.</h5>
						<div className='buttons'>
							<Link exact to='/signin'>
								<button className='btn'>Sign In</button>
							</Link>
							<Link exact to='/signup'>
								<button className='btn'>Sign Up</button>
							</Link>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
export default Home;
