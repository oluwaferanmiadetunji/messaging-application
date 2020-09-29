import React from 'react';
import NavigationBar from '../navbars/Navbar';
import Sidebar from '../navbars/Sidebar';

const Admin = () => {
	return (
		<div className='wrapper'>
			<Sidebar />
			<div id='main-panel' className='main-panel'>
				<NavigationBar />
				<div className='content'>Hoksdhvgevg</div>
			</div>
		</div>
	);
};

export default Admin;
