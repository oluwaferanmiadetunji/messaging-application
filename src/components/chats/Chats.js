import React from 'react';
import NavigationBar from '../navbar';
import Lists from './List';
// import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Chats = () => {
	return (
		<div className='chat-container'>
			<NavigationBar />
			<Row>
				<Lists />

				<Col sm={9}>sm=4</Col>
			</Row>
		</div>
	);
};

export default Chats;
