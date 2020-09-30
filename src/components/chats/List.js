import React from 'react';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Col from 'react-bootstrap/Col';

const List = () => {
	return (
		<Col sm={3} className='chat-lists'>
			<Form>
				<FormControl type='text' placeholder='Search' />
			</Form>
		</Col>
	);
};

export default List;
