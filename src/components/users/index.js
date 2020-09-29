import React from 'react';
import {Link} from 'react-router-dom';

const Users = () => {
	return (
		<>
			<li className={'active active-pro'}>
				<Link to={'#'} className='nav-link'>
					<p>{'Afe'}</p>
				</Link>
			</li>
		</>
	);
};

export default Users;
