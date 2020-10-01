import React from 'react';
import ReactEmoji from 'react-emoji';

const Message = ({chat: {createdAt, message, sender}}) => {
	const username = localStorage.username;
	let isSentByCurrentUser = false;
	if (username === sender) {
		isSentByCurrentUser = true;
	}

	return isSentByCurrentUser ? (
		<div className='messageContainer justifyEnd'>
			<p className='sentText pr-10'>{sender}</p>
			<div className='messageBox backgroundBlue'>
				<p className='messageText colorWhite'>{ReactEmoji.emojify(message)}</p>
			</div>
		</div>
	) : (
		<div className='messageContainer justifyStart'>
			<div className='messageBox backgroundLight'>
				<p className='messageText colorDark'>{ReactEmoji.emojify(message)}</p>
			</div>
			<p className='sentText pl-10'>{sender}</p>
		</div>
	);
};

export default Message;
