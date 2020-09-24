import React from 'react';
import Spinner from 'react-bootstrap/Spinner';

const Formloader = () => {
	return (
		<>
			<Spinner as='span' animation='border' size='sm' role='status' aria-hidden='true' /> Loading...
		</>
	);
};

export default Formloader;
