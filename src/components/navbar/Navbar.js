import React from 'react';
import {Link} from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import NotificationSVG from './NotificationSVG';
import MessageSVG from './MessageSVG';
import Badge from 'react-bootstrap/Badge';
import {PROFILE} from '../routes/constants';

const img = 'https://firebasestorage.googleapis.com/v0/b/mensaje-4ce96.appspot.com/o/user.jpg?alt=media';

const Navigationbar = () => {
	return (
		<Navbar expand='lg' className='nav-bar justify-content-between'>
			<Navbar.Brand href='#home'>Mensaje</Navbar.Brand>
			<Navbar.Toggle aria-controls='basic-navbar-nav' />
			<Navbar.Collapse id='basic-navbar-nav'>
				<Form />
				<Nav>
					<div className='icons'>
						<div>
							<MessageSVG />
							<Badge>9</Badge>
						</div>
						<div>
							<NotificationSVG />
							<Badge>9</Badge>
						</div>
						<Link to={PROFILE}>
							<img src={img} alt='profile' />
						</Link>
					</div>
				</Nav>
			</Navbar.Collapse>
		</Navbar>
	);
};

export default Navigationbar;
