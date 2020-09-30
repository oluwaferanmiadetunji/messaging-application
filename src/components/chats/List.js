import React from 'react';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Col from 'react-bootstrap/Col';
import InputGroup from 'react-bootstrap/InputGroup';
import Nav from 'react-bootstrap/Nav';
import Users from './Users';

const List = () => {
	return (
		<Col sm={3} className='chat-lists'>
			<Form>
				<InputGroup className='mb-2'>
					<FormControl id='inlineFormInputGroup' placeholder='Search...' />
				</InputGroup>
			</Form>

			<Nav variant='tabs' fill defaultActiveKey='recent' className='nav-tabs'>
				<Nav.Item>
					<Nav.Link eventKey='recent'>Recent</Nav.Link>
				</Nav.Item>
				<Nav.Item>
					<Nav.Link eventKey='all'>All</Nav.Link>
				</Nav.Item>
			</Nav>

			<Users />
		</Col>
	);
};

export default List;
