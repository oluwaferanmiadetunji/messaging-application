import React from 'react';
import {NavLink} from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './style.css';
import {useDataContext} from '../../contexts/DataContext';
import {useAuthContext} from '../../contexts/AuthContext';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import Socket from '../../utils/sockets';
import CreateChatRoom from '../../utils/createChat';
import Dot from '../../utils/Dot';

const List = ({id, location}) => {
	const {SetRecipient, allUsers, setCurrentRoom, setNewChats} = useDataContext();
	const {userData} = useAuthContext();
	dayjs.extend(relativeTime);

	const createRoom = (recipient) => {
		const room = CreateChatRoom(userData.username, recipient);
		setCurrentRoom(room);
		Socket.emit('getChats', room, ({chats}) => {
			setNewChats(chats);
		});
	};

	return (
		<Col xs={12} sm={12} md={5} lg={3} id={id} className='chat-list'>
			<Nav variant='tabs' fill>
				<Nav.Item>
					<Navbar.Brand className={location === 'chat' ? 'activeTab' : null}>
						<NavLink to='/chats'>Chats</NavLink>
					</Navbar.Brand>
				</Nav.Item>
				<Nav.Item>
					<Navbar.Brand className={location === 'chat' ? 'activeTab' : null}>
						<NavLink to='/users'>All Users</NavLink>
					</Navbar.Brand>
				</Nav.Item>
			</Nav>
			<div>
				{allUsers
					? allUsers.map(({imageUrl, name, online, lastLogin, email, username}, index) => (
							<NavLink
								to={`/${username}/chats`}
								className='user-chat-detail'
								key={index}
								onClick={() => {
									SetRecipient({imageUrl, name, online, lastLogin, email, username});
									createRoom(username);
								}}
							>
								<Card>
									<div className='user-image'>
										<img alt='user' src={imageUrl} />
									</div>
									<div className='detail'>
										<Card.Title>
											{name} <Dot currentClass={online ? 'online' : 'offline'} />
										</Card.Title>
										<Card.Subtitle className='mb-2 text-muted'>
											{online ? 'Online' : `Last seen  ${dayjs(lastLogin).fromNow()}`}
										</Card.Subtitle>
									</div>
								</Card>
							</NavLink>
					  ))
					: null}
			</div>
		</Col>
	);
};

export default List;
