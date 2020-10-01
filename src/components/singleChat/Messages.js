import React from 'react';
import ScrollToBottom from 'react-scroll-to-bottom';
import Message from './Message';

const Messages = ({chats}) => {
	return (
		<ScrollToBottom className='messages'>
			{chats.map((chat, index) => (
				<div key={index}>
					<Message chat={chat} />
				</div>
			))}
		</ScrollToBottom>
	);
};

export default Messages;
  