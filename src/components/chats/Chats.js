import React from 'react';
import NavigationBar from '../navbar';
import Lists from './List';
import Conversation from './Conversation';
import Profile from './Profile';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Chats = () => {
	return (
		<div className='chat-container'>
			<NavigationBar />
			<Row>
				<Lists />
				<Col sm={9}>
					<Row className='chats-div'>
						<Conversation />
						<Profile />
					</Row>
				</Col>
			</Row>
		</div>
	);
};

export default Chats;
