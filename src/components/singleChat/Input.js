import React from 'react';

const Input = ({sendMessage, message, setMessage}) => {
	return (
		<div className='chatForm'>
			<div className='input'>
				<input
					type='text'
					placeholder='Type a message'
					value={message}
					onChange={({target}) => setMessage(target.value)}
					onKeyPress={(event) => (event.key === 'Enter' ? sendMessage(event) : null)}
				/>
			</div>
			<div className='sendButton'>
				<button  onClick={(event) => sendMessage(event)}>
					Send
				</button>
			</div>
		</div>
	);
};

export default Input;
