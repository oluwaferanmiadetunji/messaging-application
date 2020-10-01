import React from 'react';
import {Link} from 'react-router-dom';

const InfoBar = ({recipient}) => {
	return (
		<Link to={`/${recipient.username}/profile`}>
			<div className='infoBar'>
				<div className='recipientName'>
					<div>
						<img src={recipient.imageUrl} alt='profile' />
					</div>
					<div>
						<p>{recipient.name}</p>
					</div>
					<div>
						<p className='status'>{recipient.online ? 'Online' : 'Offline'}</p>
					</div>
				</div>
			</div>
		</Link>
	);
};

export default InfoBar;
