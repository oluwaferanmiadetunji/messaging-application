import React from 'react';
import Spinner from 'react-bootstrap/Spinner';

const Loader = () => {
	return (
		<div className='main'>
			<div className='cover black'></div>
			<div className='container'>
				<h1 className='logo'>Mensaje</h1>
				<div className='content'>
					<h4 className='motto'>A better way to connect and communicate with friends.</h4>
					<div className='subscribe'>
						<div className='info-text'>
							<Spinner animation='grow' variant='light' size='sm' />
							<Spinner animation='grow' variant='light' size='sm' />
							<Spinner animation='grow' variant='light' size='sm' />
							<Spinner animation='grow' variant='light' size='sm' />
							<Spinner animation='grow' variant='light' size='sm' />
							<Spinner animation='grow' variant='light' size='sm' />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Loader;
