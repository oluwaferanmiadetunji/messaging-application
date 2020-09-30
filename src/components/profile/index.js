import React from 'react';
import Profile from './Profile';
import Layout from '../layout';
const ProfileWithLayout = Layout(Profile);

export default function () {
	return <ProfileWithLayout />;
}
