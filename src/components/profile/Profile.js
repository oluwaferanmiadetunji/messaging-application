import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Layout from '../layout';

const UserProfile = () => {
	return (
		<Layout>
			<Container fluid>
				<Row>
					<Col md={8}>
						<div className='card'>
							<div className='header text-center'>
								<h4 className='title'>Profile</h4>
							</div>
							<div className='content table-responsive'>
								<Form>
									<Row>
										<Col>
											<Form.Control placeholder='First name'readOnly  />
										</Col>
										<Col>
											<Form.Control placeholder='Last name'readOnly  />
										</Col>
									</Row>
								</Form>
							</div>
						</div>
					</Col>
				</Row>
			</Container>
		</Layout>
	);
};

export default UserProfile;
