import React, {useEffect, useState} from 'react';
import Col from 'react-bootstrap/Col';
import Socket from '../api/Sockets';
import {useAppContext} from '../utils/Context';

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
			Socket.emit('sendMessage', {data, chat: currentRoom}, () => {
				setMessage('');
			});
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
				<div className='inner-container'>
					<input
						value={message}
						onChange={({target}) => setMessage(target.value)}
						onKeyPress={(event) => (event.key === 'Enter' ? sendMessage(event) : null)}
					/>
				</div>
			</div>
		</Col>
	);
};

export default Chats;
