import React from 'react';
import './style.css';
import Navbar from '../navbar';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import List from '../components/list/List';
import ChatBox from '../components/chatBox/ChatBox';
import Profile from '../components/profile/Profile';

const Chats = () => {
	return (
		<div>
			<Navbar />
			<Container className='chat-container'>
				<Row>
					<List id='ch-list' location={'chat'} />
					<ChatBox id='ch-chatBox' />
					<Profile id='ch-profile' />
				</Row>
			</Container>
		</div>
	);
};

export default Chats;
