import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
// import {useAuth} from '../routes/Auth';

const NavbarLinks = () => {
	// const { setIsLogged } = useAuth();
	// function logOut() {
  //   setIsLogged();
  // }
	return (
		<Navbar.Collapse id='responsive-navbar-nav'>
			<Nav className='mr-auto' />
			<Nav>
				<Nav.Link href='#deets'>Notifications</Nav.Link>
				<Nav.Link href='#deets'>Profile</Nav.Link>
				<Nav.Link href='#memes'>Logout</Nav.Link>
			</Nav>
		</Navbar.Collapse>
	);
};

export default NavbarLinks;
