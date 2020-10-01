import React, {useEffect} from 'react';
import socket from '../api/Sockets';
import {NavLink} from 'react-router-dom';
import ListGroup from 'react-bootstrap/ListGroup';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Col from 'react-bootstrap/Col';
import InputGroup from 'react-bootstrap/InputGroup';
import Nav from 'react-bootstrap/Nav';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import Dot from '../utils/Dot';
import {useAppContext} from '../utils/Context';
import CreateChatRoom from '../utils/createChat';
import Socket from '../api/Sockets';

const Userlist = () => {
	const {setAllUsers, allUsers, userData, setCurrentRoom, SetRecipient, setChats} = useAppContext();
	dayjs.extend(relativeTime);

	const createRoom = (recipient) => {
		const room = CreateChatRoom(userData.username, recipient);
		setCurrentRoom(room);
		Socket.emit('getChats', room, ({chats}) => {
			setChats(chats);
		});
	};

	useEffect(() => {
		socket.on('allUsers', (data) => {
			setAllUsers(data);
		});
	}, [allUsers, setAllUsers]);

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

			<ListGroup className='users-list'>
				{allUsers
					? allUsers.map(({imageUrl, name, online, lastLogin, username}, index) => (
							<NavLink
								exact
								to={`/chats/${username}`}
								className='list-group-item'
								key={index}
								onClick={() => {
									SetRecipient(username);
									createRoom(username);
								}}
							>
								<div>
									<img src={imageUrl} alt='profile' />
								</div>
								<div className='user-info'>
									<p className='name'>{name}</p>
									<span>{dayjs(lastLogin).fromNow()}</span>
								</div>
								<div>
									<Dot currentClass={online ? 'online' : 'offline'} />
								</div>
							</NavLink>
					  ))
					: null}
			</ListGroup>
		</Col>
	);
};

export default Userlist;
