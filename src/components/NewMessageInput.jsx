import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { sendDirectMessage } from '../realtimeCommunications/socketConnection'
export default function NewMessageInput() {
	const { choosenChatDetails } = useSelector((state) => state.chat)
	const [message, setMessage] = useState('')
	const handleChange = (e) => {
		setMessage(e.target.value)
	}
	const handleKeyPressed = (e) => {
		if (e.key === 'Enter') {
			handleSendMessage()
			setMessage('')
		}
	}
	const handleSendMessage = () => {
		message.length > 0 && sendDirectMessage({ receiverUserId: choosenChatDetails.id, content: message })
		setMessage('')
	}
	return (
		<div className='h-[60px] w-full flex items-center justify-center'>
			<input
				className='bg-[#2f3136] w-[98%] text-white border-none rounded-lg text-lg px-3 h-12'
				placeholder={`Send message to ${choosenChatDetails?.name}`}
				value={message}
				onChange={handleChange}
				onKeyDown={handleKeyPressed}
			/>
		</div>
	)
}
