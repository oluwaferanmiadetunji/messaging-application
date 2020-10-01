import React, {useEffect} from 'react';
import socket from '../api/Sockets';
import {NavLink} from 'react-router-dom';
import ListGroup from 'react-bootstrap/ListGroup';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import Dot from '../utils/Dot';
import {useAppContext} from '../utils/Context';
import CreateChatRoom from '../utils/createChat';
import Socket from '../api/Sockets';

const List = () => {
	const {setAllUsers, allUsers, userData, setCurrentRoom, SetRecipient, setNewChats} = useAppContext();
	dayjs.extend(relativeTime);

	const createRoom = (recipient) => {
		const room = CreateChatRoom(userData.username, recipient);
		setCurrentRoom(room);
		Socket.emit('getChats', room, ({chats}) => {
			setNewChats(chats);
		});
	};

	useEffect(() => {
		socket.on('allUsers', (data) => {
			setAllUsers(data);
		});
	}, [allUsers, setAllUsers]);
	return (
		<ListGroup className='users-list'>
			{allUsers
				? allUsers.map(({imageUrl, name, online, lastLogin, username}, index) => (
						<NavLink
							exact
							to={`/${username}/chats`}
							className='list-group-item'
							key={index}
							onClick={() => {
								SetRecipient({imageUrl, name, online, lastLogin, username});
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
	);
};

export default List;
