import React, { useState } from 'react'
import AddFriendButton from './AddFriendButton'
import AddFriendsDialouge from './AddFriendsDialouge'
import FriendsList from './FriendsList'
import FriendsTitle from './FriendsTitle'
import PendingInvitationsList from './PendingInvitationsList'

export default function Friendsbar() {
	const [openDialouge, setOpenDialouge] = useState(false)
	return (
		<div className='w-[224px] h-full flex flex-col items-center bg-[#2f3136]'>
			<AddFriendButton setOpenDialouge={setOpenDialouge} />
			<FriendsTitle title='Private messages' />
			<FriendsList />
			<FriendsTitle title='Invitations' />
			<PendingInvitationsList />
			{openDialouge && <AddFriendsDialouge setOpen={setOpenDialouge} />}
		</div>
	)
}
