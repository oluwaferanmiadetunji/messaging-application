import React from 'react';
import ReactEmoji from 'react-emoji';
import ScrollToBottom from 'react-scroll-to-bottom';
import {useAppContext} from '../utils/Context';
import dayjs from 'dayjs';

const Messages = ({chats}) => {
	const {recipient} = useAppContext();
	const username = localStorage.username;

	return (
		<ScrollToBottom className='messages'>
			{chats.map(({createdAt, message, sender}, index) => (
				<div key={index}>
					{sender === 'admin' && (
						<div className='messageContainer'>
							<div className='messageBox admin'>
								<p className='messageText'>{ReactEmoji.emojify(message)}</p>
							</div>
						</div>
					)}
					{sender === recipient.username && (
						<div className='container'>
							<img src={recipient.imageUrl} alt='Avatar' />
							<p>{ReactEmoji.emojify(message)}</p>
							<span className='time-right'>{dayjs(createdAt).format('MMM DD, YYYY HH:mm')}</span>
						</div>
					)}

					{sender === username && (
						<div className='container sender'>
							<img src={recipient.imageUrl} alt='Avatar' className='right' />
							<p>{ReactEmoji.emojify(message)}</p>
							<span className='time-left'>{dayjs(createdAt).format('MMM DD, YYYY HH:mm')}</span>
						</div>
					)}
				</div>
			))}
		</ScrollToBottom>
	);
};

export default Messages;
