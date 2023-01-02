import React from 'react'
import { FriendsListItem } from '../components'
const DUMMY_FRIENDS = [
	{ id: 1, userName: 'Mark', isOnline: true },
	{ id: 2, userName: 'Jason', isOnline: false },
	{ id: 3, userName: 'Rosy', isOnline: true },
]
export default function FriendsList() {
	return (
		<div className='grow w-full'>
			{DUMMY_FRIENDS.map((friend) => (
				<FriendsListItem key={friend.id} id={friend.id} name={friend.userName} isOnline={friend.isOnline} />
			))}
		</div>
	)
}
