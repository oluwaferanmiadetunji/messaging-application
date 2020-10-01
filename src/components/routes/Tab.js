import React from 'react';
import Nav from 'react-bootstrap/Nav';
import {RECENT, ALLUSERS} from './constants';

const Tab = () => {
	return (
		<Nav variant='tabs' fill defaultActiveKey={RECENT} className='nav-tabs'>
			<Nav.Item>
				<Nav.Link href={RECENT}>Recent</Nav.Link>
			</Nav.Item>
			<Nav.Item>
				<Nav.Link href={ALLUSERS}>Contact</Nav.Link>
			</Nav.Item>
		</Nav>
	);
};

export default Tab;
