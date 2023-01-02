import React from 'react'
import PendingInvitationItem from './PendingInvitationItem'

const DUMMY_INVITATIONS = [
	{
		_id: '1',
		senderId: {
			userName: 'Rahul',
			email: 'rahul@gmail.com',
		},
	},
	{
		_id: '2',
		senderId: {
			userName: 'Amir',
			email: 'amir@gmail.com',
		},
	},
]
export default function PendingInvitationsList() {
	return (
		<div className='flex flex-col w-full h-1/4 overflow-auto'>
			{DUMMY_INVITATIONS.map((invitation) => (
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
