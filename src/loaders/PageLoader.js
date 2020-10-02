import React from 'react';
import Spinner from 'react-bootstrap/Spinner';
import './style.css'

const PageLoader = () => {
	return (
		<div className='loader-container'>
			<div className='center'>
				<h2>Mensaje</h2>
				<div className='spinner-div'>
					<Spinner animation='grow' variant='light' size='sm' />
					<Spinner animation='grow' variant='light' size='sm' />
					<Spinner animation='grow' variant='light' size='sm' />
					<Spinner animation='grow' variant='light' size='sm' />
					<Spinner animation='grow' variant='light' size='sm' />
					<Spinner animation='grow' variant='light' size='sm' />
				</div>
			</div>
		</div>
	);
};

export default PageLoader;
