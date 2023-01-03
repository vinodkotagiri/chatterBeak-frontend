import React from 'react'
import { useDispatch } from 'react-redux'
import { Avatar, OnlineIndicator } from '../components'
import { setChoosenChatDetails } from '../redux/features/chatSlice'
export default function FriendsListItem({ id, name, isOnline }) {
	const dispatch = useDispatch()
	const handleChooseActiveConversation = () => {
		dispatch(setChoosenChatDetails({ chatDetails: { id, name }, chatType: 'DIRECT' }))
	}
	return (
		<>
			<button
				className='w-full h-12 mt-3 flex items-center justify-start text-black relative'
				onClick={handleChooseActiveConversation}>
				<Avatar userName={name} />
				<div className='ml-2 font-bold text-[#8e9297] text-left'>{name}</div>
				{isOnline && <OnlineIndicator />}
			</button>
		</>
	)
}
