import React from 'react';
import Chats from './Chats';
import Layout from '../layout';
const ChatWithLayout = Layout(Chats);

export default function () {
	return <ChatWithLayout />;
}
