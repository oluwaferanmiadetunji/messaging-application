import React from 'react';
import NavigationBar from '../navbar';
import Lists from './List';
import Conversation from './Conversation';
import Row from 'react-bootstrap/Row';

const Chats = () => {
	return (
		<div className='chat-container'>
			<NavigationBar />
			<Row>
				<Lists />
				<Conversation />
			</Row>
		</div>
	);
};

export default Chats;
