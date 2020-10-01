import React from 'react';
import AllUsers from './AllUsers';
import Layout from '../layout';
const AllUsersWithLayout = Layout(AllUsers);

export default function () {
	return <AllUsersWithLayout />;
}
