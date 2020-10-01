import React from 'react';
import ReactEmoji from 'react-emoji';
import ScrollToBottom from 'react-scroll-to-bottom';
import {useAppContext} from '../utils/Context';
import dayjs from 'dayjs';

const Messages = ({chats}) => {
	const {recipient} = useAppContext();
	const username = localStorage.username;

	const messageClass = (user) => {
		let textClass = 'messageBox';
		if (user === 'admin') {
			textClass = 'messageBox admin';
		} else if (user === recipient.username) {
			textClass = 'messageBox recipient';
		} else if (user === username) {
			textClass = 'messageBox sender';
		}

		return textClass;
	};
	return (
		<ScrollToBottom className='messages'>
			{chats.map(({createdAt, message, sender}, index) => (
				<div key={index}>
					<div className='messageContainer'>
						<div className={messageClass(sender)}>
							<p className='messageText'>{ReactEmoji.emojify(message)}</p>
							{sender === 'admin' ? null : (
								<>
									<p className='date'>{dayjs(createdAt).format('MMM DD, YYYY HH:mm')}</p>
									<p className='sentText'>{sender}</p>
								</>
							)}
						</div>
					</div>
				</div>
			))}
		</ScrollToBottom>
	);
};

export default Messages;
