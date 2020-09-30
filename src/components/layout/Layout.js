import React from 'react';
import NavigationBar from '../navbar';
import Row from 'react-bootstrap/Row';
import UsersList from '../users/UsersList';
const Layout = (Component) => () => {
	return (
		<div className='chat-container'>
			<NavigationBar />
			<Row>
				<UsersList />
				<Component />
			</Row>
		</div>
	);
};

export default Layout;
