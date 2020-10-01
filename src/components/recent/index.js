import React from 'react';
import Recent from './Recent';
import Layout from '../layout';
const RecentWithLayout = Layout(Recent);

export default function () {
	return <RecentWithLayout />;
}
