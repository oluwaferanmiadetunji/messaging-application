import React from 'react';
import Chat from './Chat';
import Layout from '../layout';
const ChatWithLayout = Layout(Chat);

export default function () {
	return <ChatWithLayout />;
}
