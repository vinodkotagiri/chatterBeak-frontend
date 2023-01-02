import React from 'react'
import { useSelector } from 'react-redux'
import PendingInvitationItem from './PendingInvitationItem'

export default function PendingInvitationsList() {
	const { pendingInvitations } = useSelector((state) => state.friendInvitation)
	return (
		<div className='flex flex-col w-full h-1/4 overflow-auto'>
			{pendingInvitations?.map((invitation) => (
				<PendingInvitationItem
					key={invitation._id}
					id={invitation._id}
					userName={invitation.senderId.userName}
					email={invitation.senderId.email}
				/>
			))}
		</div>
	)
}
