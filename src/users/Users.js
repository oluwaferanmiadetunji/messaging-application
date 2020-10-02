import React, {useEffect} from 'react';
import './style.css';
import Navbar from '../navbar';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import List from '../components/list/List';
import ChatBox from '../components/chatBox/ChatBox';
import Profile from '../components/profile/Profile';
import Socket from '../utils/sockets';
import {useDataContext} from '../contexts/DataContext';

const Chats = () => {
	const {setAllUsers} = useDataContext();

	useEffect(() => {
		Socket.on('allUsers', (data) => {
			setAllUsers(data);
			localStorage.removeItem('allUsers');
			localStorage.setItem('allUsers', JSON.stringify(data));
		});
	}, [setAllUsers]);

	return (
		<div>
			<Navbar />
			<Container className='chat-container'>
				<Row>
					<List id='ch-list' location={'users'} />
					<ChatBox id='ch-chatBox' />
					<Profile id='ch-profile' />
				</Row>
			</Container>
		</div>
	);
};

export default Chats;
