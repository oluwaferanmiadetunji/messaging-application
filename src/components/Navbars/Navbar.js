import React, {useState} from 'react';
import Navbar from 'react-bootstrap/Navbar';
import NavbarLinks from './NavbarLinks';

const NavigationBar = () => {
	const [sidebarExists, setSidebarExists] = useState(false);
	const mobileSidebarToggle = (e) => {
		e.preventDefault();
		document.documentElement.classList.toggle('nav-open');
		var node = document.createElement('div');
		node.id = 'bodyClick';
		node.onclick = function () {
			this.parentElement.removeChild(this);
			document.documentElement.classList.toggle('nav-open');
		};
		document.body.appendChild(node);
		setSidebarExists(!sidebarExists);
	};

	return (
		<Navbar collapseOnSelect expand='lg' bg='dark' variant='dark'>
			<Navbar.Brand href='#home'>React-Bootstrap</Navbar.Brand>
			<Navbar.Toggle aria-controls='responsive-navbar-nav' onClick={mobileSidebarToggle} />
			<NavbarLinks />
		</Navbar>
	);
};

export default NavigationBar;
