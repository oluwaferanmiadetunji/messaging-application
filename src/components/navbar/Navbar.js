import React from 'react';
import {Link} from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import NotificationSVG from '../utils/NotificationSVG';
import MessageSVG from '../utils/MessageSVG';
import Badge from 'react-bootstrap/Badge';
import {PROFILE} from '../routes/constants';
import {RECENT} from '../routes/constants';
import {useAppContext} from '../utils/Context';

const img = 'https://firebasestorage.googleapis.com/v0/b/mensaje-4ce96.appspot.com/o/user.jpg?alt=media';

const Navigationbar = () => {
	const {
		userData: {imageUrl},
	} = useAppContext();
	return (
		<Navbar expand='lg' className='nav-bar justify-content-between'>
			<Navbar.Brand className='app-header'>
				<Link to={RECENT}>Mensaje</Link>
			</Navbar.Brand>
			<Navbar.Toggle aria-controls='basic-navbar-nav'></Navbar.Toggle>
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
							<img src={imageUrl ? imageUrl : img} alt='profile' />
						</Link>
					</div>
				</Nav>
			</Navbar.Collapse>
		</Navbar>
	);
};

export default Navigationbar;
