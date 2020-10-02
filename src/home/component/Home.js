import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const Home = ({setView}) => {
	return (
		<Card className='text-center'>
			<Card.Body>
				<Card.Title>Stay connected with friends </Card.Title>
				<Card.Text>Communicate real time with people from all over the world.</Card.Text>
				<Button variant='primary' onClick={() => setView('login')}>
					Sign In
				</Button>
				<Button variant='primary' onClick={() => setView('register')}>
					Sign Up
				</Button>
			</Card.Body>
		</Card>
	);
};

export default Home;
