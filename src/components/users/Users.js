import React from 'react';
import {Link} from 'react-router-dom';

import logo from 'assets/images/reactlogo.png';
import sidebarImage from 'assets/images/default.jpg';

const Sidebar = () => {
	return (
		<div id='sidebar' className='sidebar' data-color={'black'} data-image={sidebarImage}>
			<div className='sidebar-background' style={{backgroundImage: `url(${sidebarImage})`}} />
			<div className='logo'>
				<a href='#' className='simple-text logo-mini'>
					<div className='logo-img'>
						<img src={logo} alt='logo_image' />
					</div>
				</a>
				<a href='#' className='simple-text logo-normal'>
					Mensaje
				</a>
			</div>
			<div className='sidebar-wrapper'>
				<ul className='nav'>
					<li className='active '>
						<Link to={'/'} className='nav-link'>
							<p>afe</p>
						</Link>
					</li>
					<li className='active'>
						<Link to={'/'} className='nav-link'>
							<p>afe</p>
						</Link>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default Sidebar;
