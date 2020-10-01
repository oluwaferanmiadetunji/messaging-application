import React from 'react';
import Chats from './Chats';
import Layout from '../layout';
const ChatsWithLayout = Layout(Chats);

export default function () {
	return <ChatsWithLayout />;
}
