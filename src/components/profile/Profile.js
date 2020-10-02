import React, {useState, useEffect} from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';
import './profile.css';
import {useDataContext} from '../../contexts/DataContext';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';

const Profile = ({id}) => {
	const {recipient} = useDataContext();
	dayjs.extend(relativeTime);

	const [imageUrl, setImageUrl] = useState('');
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [online, setOnline] = useState('');
	const [username, setUsername] = useState('');

	useEffect(() => {
		setImageUrl(recipient.imageUrl);
		setName(recipient.name);
		setEmail(recipient.email);
		setOnline(recipient.online);
		setUsername(recipient.username);
	}, [recipient]);

	return Object.keys(recipient).length !== 0 ? (
		<Col xs={12} sm={12} md={3} lg={3} id={id} className='chat-profile'>
			<h4>Profile</h4>
			<div className='user'>
				<img src={imageUrl} alt='user' />
				<div className='user-details'>
					<Form.Group as={Row} controlId='formPlaintextEmail'>
						<Form.Label column sm='2'>
							Name:
						</Form.Label>
						<Col sm='10'>
							<Form.Control plaintext readOnly defaultValue={name} />
						</Col>
					</Form.Group>
					<Form.Group as={Row} controlId='formPlaintextEmail'>
						<Form.Label column sm='3'>
							Username:
						</Form.Label>
						<Col sm='8'>
							<Form.Control plaintext readOnly defaultValue={username} />
						</Col>
					</Form.Group>
					<Form.Group as={Row} controlId='formPlaintextEmail'>
						<Form.Label column sm='2'>
							Email:
						</Form.Label>
						<Col sm='10'>
							<Form.Control plaintext readOnly defaultValue={email} />
						</Col>
					</Form.Group>
					<Form.Group as={Row} controlId='formPlaintextEmail'>
						<Form.Label column sm='2'>
							Status:
						</Form.Label>
						<Col sm='10'>
							<Form.Control
								plaintext
								readOnly
								defaultValue={online ? 'Online' : 'Offline'}
							/>
						</Col>
					</Form.Group>
				</div>
			</div>
		</Col>
	) : null;
};

export default Profile;
