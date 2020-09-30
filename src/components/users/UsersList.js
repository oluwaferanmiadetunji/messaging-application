import React from 'react';
import {NavLink} from 'react-router-dom';
import ListGroup from 'react-bootstrap/ListGroup';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Col from 'react-bootstrap/Col';
import InputGroup from 'react-bootstrap/InputGroup';
import Nav from 'react-bootstrap/Nav';

const Userlist = () => {
  
const img = 'https://firebasestorage.googleapis.com/v0/b/mensaje-4ce96.appspot.com/o/user.jpg?alt=media';
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
		</Col>
	);
};

export default Userlist;
