import React from 'react';
import NavigationBar from '../navbars/Navbar';
import Sidebar from '../navbars/Sidebar';

const Layout = ({children}) => {
	return (
		<div className='wrapper'>
			<Sidebar />
			<div id='main-panel' className='main-panel'>
				<NavigationBar />
				<div className='content'>{children}</div>
			</div>
		</div>
	);
};

export default Layout;
