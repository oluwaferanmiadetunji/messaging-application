import React from 'react';
import NavigationBar from '../Navbars/Navbar';
import Users from '../users/Users';

const Admin = () => {
	return (
		<div className='wrapper'>
			<Users />
			<div id='main-panel' className='main-panel'>
				<NavigationBar />
				<div className='content'>Hoksdhvgevg</div>
			</div>
		</div>
	);
};

export default Admin;
