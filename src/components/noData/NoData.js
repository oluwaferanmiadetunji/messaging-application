import React from 'react';
import image from './bg.svg';
import './style.css';

const NoData = () => {
	return (
		<div className='con'>
      <h4>Start Messaging</h4>
			<img src={image} alt='bg' className='background-image' />
		</div>
	);
};

export default NoData;
