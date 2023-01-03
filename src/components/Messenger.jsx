import React from 'react'
import { WelcomeMessage, MessengerContent } from '../components'
import { useSelector } from 'react-redux'
export default function Messenger() {
	const { choosenChatDetails } = useSelector((state) => state.chat)

	return (
		<div className='flex grow bg-[#36393f] mt-12'>
			{!choosenChatDetails ? <WelcomeMessage /> : <MessengerContent chatDetails={choosenChatDetails} />}
		</div>
	)
}
