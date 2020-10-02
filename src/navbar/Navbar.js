import React from 'react';
import Nav from 'react-bootstrap/Nav';
import {NavLink} from 'react-router-dom';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Navbar from 'react-bootstrap/Navbar';
import './style.css';
import {useAuthContext} from '../contexts/AuthContext';
import Socket from '../utils/sockets';

const NavigationBar = () => {
	const {userData} = useAuthContext();
	const username = localStorage.username;

	const logout = () => {
		localStorage.removeItem('tokens');
		localStorage.setItem('isLogged', false);
		window.location.href = '/';
		Socket.emit('offline', {username});
	};

	return (
		<Navbar collapseOnSelect expand='lg' bg='dark' fixed='top' variant='dark'>
			<Navbar.Brand>
				<NavLink exact to='/'>
					Mensaje
				</NavLink>
			</Navbar.Brand>
			<Navbar.Toggle aria-controls='responsive-navbar-nav' />
			<Navbar.Collapse id='responsive-navbar-nav'>
				<Nav className='mr-auto' />
				<Nav>
					<NavDropdown title={`${userData.name}`} id='collasible-nav-dropdown'>
						{/* <NavDropdown.Item href='#action/3.1'>View Profile</NavDropdown.Item>
						<NavDropdown.Item href='#action/3.3'>Something</NavDropdown.Item> */}
						<NavDropdown.Divider />
						<NavDropdown.Item onClick={logout}>Logout</NavDropdown.Item>
					</NavDropdown>
					<Nav.Link>
						<img src={userData.imageUrl} alt='profile' className='profileImage' />
					</Nav.Link>
				</Nav>
			</Navbar.Collapse>
		</Navbar>
	);
};

export default NavigationBar;
