import React from 'react';
import NavigationBar from '../navbar';
import Row from 'react-bootstrap/Row';
const Layout = (Component) => () => {
	return (
		<div className='chat-container'>
			<NavigationBar />
			<Row>
				<Component />
			</Row>
		</div>
	);
};

export default Layout;
