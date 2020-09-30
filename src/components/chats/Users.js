import React from 'react';
import {NavLink} from 'react-router-dom';
import ListGroup from 'react-bootstrap/ListGroup';

const img = 'https://firebasestorage.googleapis.com/v0/b/mensaje-4ce96.appspot.com/o/user.jpg?alt=media';
const Users = () => {
	return (
		<ListGroup className='users-list'>
			<NavLink exact to='/chats' className='list-group-item'>
				<div>
					<img src={img} alt='profile' />
				</div>
				<div className='user-info'>
					<p className='name'>
						Test Test
						<span>6:20pm</span>
					</p>
					<p className='text'>Cras justo odioCras justo odioCras justo odio</p>
				</div>
			</NavLink>
			<NavLink exact to='/' className='list-group-item'>
				<div>
					<img src={img} alt='profile' />
				</div>
				<div className='user-info'>
					<p className='name'>
						Test Test
						<span>6:20pm</span>
					</p>
					<p className='text'>Cras justo odioCras justo odioCras justo odio</p>
				</div>
			</NavLink>
			<NavLink exact to='/' className='list-group-item'>
				<div>
					<img src={img} alt='profile' />
				</div>
				<div className='user-info'>
					<p className='name'>
						Test Test
						<span>6:20pm</span>
					</p>
					<p className='text'>Cras justo odioCras justo odioCras justo odio</p>
				</div>
			</NavLink>
		</ListGroup>
	);
};

export default Users;
