import React, {useEffect, useState} from 'react';
import Col from 'react-bootstrap/Col';
import Socket from '../api/Sockets';
import {useAppContext} from '../utils/Context';
import InfoBar from './InfoBar';
import Input from './Input';
import Messages from './Messages';

const Chats = () => {
	const {chats, setNewChats, currentRoom} = useAppContext();
	const [message, setMessage] = useState('');
	const username = localStorage.username;

	// function to send message
	const sendMessage = (event) => {
		event.preventDefault();
		if (message) {
			const data = {
				username,
				message,
				createdAt: new Date().toISOString(),
			};
			Socket.emit('sendMessage', {data, chat: currentRoom});
			setMessage('');
		}
	};

	useEffect(() => {
		Socket.on('message', (message) => {
			setNewChats(message);
		});
	}, [setNewChats, chats]);

	return (
		<Col sm={9} className='chats-div'>
			<div className='outer-container'>
				<InfoBar />
				<Messages chats={chats} />
				<Input message={message} setMessage={setMessage} sendMessage={sendMessage} />
			</div>
		</Col>
	);
};

export default Chats;
