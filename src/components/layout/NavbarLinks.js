import React from 'react';
import {NavLink} from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import {useAuth} from '../routes/Auth';
import {PROFILE} from '../routes/constants';

const NavbarLinks = () => {
	const {setLogout} = useAuth();

	function logOut() {
		setLogout();
	}
	return (
		<Navbar.Collapse id='responsive-navbar-nav'>
			<Nav className='mr-auto' />
			<Nav>
				<Nav.Link>Notifications</Nav.Link>

				<NavLink to={PROFILE} className='link' activeClassName='link active'>
					Profile
				</NavLink>
				<Nav.Link onClick={logOut}>Logout</Nav.Link>
			</Nav>
		</Navbar.Collapse>
	);
};

export default NavbarLinks;
