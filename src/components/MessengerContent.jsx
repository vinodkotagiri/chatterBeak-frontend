import React, { useEffect } from 'react'
import { Messages, NewMessageInput } from '../components'
import { getDirectChatHistory } from '../realtimeCommunications/socketConnection'
export default function MessengerContent({ chatDetails }) {
	useEffect(() => {
		//Fetch chat history
		getDirectChatHistory({
			receiverUserId: chatDetails.id,
		})
	}, [chatDetails])

	return (
		<div className='grow '>
			<Messages />
			<NewMessageInput />
		</div>
	)
}
