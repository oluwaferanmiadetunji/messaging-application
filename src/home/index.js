import React, {useState} from 'react';
import Login from './component/Login';
import Register from './component/Register';
import Home from './component/Home';
import ForgotPassword from './component/ForgotPassword';
import './component/style.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import image from './component/bg.svg';


const HomePage = () => {
	const [view, setView] = useState('home');
	
	return (
		<Container>
			<Row>
				<Col className='components' sm='12' md='6' lg='6'>
					<h4 className='app-header'>Mensaje</h4>
					{view === 'home' && <Home setView={setView} />}
					{view === 'login' && <Login setView={setView} />}
					{view === 'register' && <Register setView={setView} />}
					{view === 'forgotPassword' && <ForgotPassword setView={setView} />}
				</Col>
				<Col className='intro' sm='12' md='6' lg='6'>
					<img src={image} alt='bg' className='background-image' />
				</Col>
			</Row>
		</Container>
	);
};

export default HomePage;
