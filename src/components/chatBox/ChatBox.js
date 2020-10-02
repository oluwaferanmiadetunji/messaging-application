import React, {useEffect, useState} from 'react';
import Card from 'react-bootstrap/Card';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import ScrollToBottom from 'react-scroll-to-bottom';
import Col from 'react-bootstrap/Col';
import './style.css';
import {useDataContext} from '../../contexts/DataContext';
import dayjs from 'dayjs';
import Socket from '../../utils/sockets';

const ChatBox = ({id}) => {
	const [message, setMessage] = useState('');
	const {chats, recipient, currentRoom, setChats} = useDataContext();

	const [allChats, setAllChats] = useState([]);
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
		setAllChats(chats);
		Socket.on('message', (message) => {
			setChats(message);
		});
	}, [chats, setChats]);

	return (
		<Col xs={12} sm={12} md={7} lg={6} id={id} className='chat-details'>
			<ScrollToBottom className='messages'>
				{allChats.map(({createdAt, message, sender}, index) => (
					<div key={index} style={{width: '100%', overflow: 'auto'}}>
						{sender === 'admin' && (
							<Card className='chats admin'>
								<Card.Body>{message}</Card.Body>
							</Card>
						)}
						{sender === recipient.username && (
							<Card className='chats recipient'>
								<Card.Body>{message}</Card.Body>
								<Card.Subtitle className='mb-2 text-muted'>
									{dayjs(createdAt).format('MMM DD, YYYY HH:mm')}
								</Card.Subtitle>
							</Card>
						)}
						{sender === username && (
							<Card className='chats sender'>
								<Card.Body>{message}</Card.Body>
								<Card.Subtitle className='mb-2 text'>
									{dayjs(createdAt).format('MMM DD, YYYY HH:mm')}
								</Card.Subtitle>
							</Card>
						)}
					</div>
				))}
			</ScrollToBottom>
			<div>
				<InputGroup className='mb-3'>
					<FormControl
						placeholder='Type Message...'
						size='lg'
						value={message}
						onChange={({target}) => setMessage(target.value)}
						onKeyPress={(event) => (event.key === 'Enter' ? sendMessage(event) : null)}
						type='text'
						rows={3}
					/>
					<InputGroup.Append>
						<Button size='sm' onClick={(event) => sendMessage(event)}>
							Send
						</Button>
					</InputGroup.Append>
				</InputGroup>
			</div>
		</Col>
	);
};

export default ChatBox;
