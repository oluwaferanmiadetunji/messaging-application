import React from 'react';
import Col from 'react-bootstrap/Col';
import Chat from '../singleChat';
import Tab from '../routes/Tab';
import List from './List';

const RecentChats = () => {
	return (
		<>
			<Col sm={3} className='chat-lists'>
				<Tab />
				<List />
			</Col>
			<Chat />
		</>
	);
};

export default RecentChats;
