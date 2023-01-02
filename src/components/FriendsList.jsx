import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { FriendsListItem } from '../components'
export default function FriendsList() {
	const { friends, onlineUsers } = useSelector((state) => state.friendInvitation)
	const [onlineFriends, setOnlineFriends] = useState([])
	useEffect(() => {
		checkIfOnline(friends, onlineFriends)
	}, [friends, onlineUsers])
	const checkIfOnline = (friends = [], onlineFriends = []) => {
		const onlineFriendsList = []
		friends.forEach((friend) => {
			const isUserOnline = onlineUsers.find((user) => user.userId === friend.id)
			if (isUserOnline) onlineFriendsList.push({ ...friend, isOnline: true })
			else onlineFriendsList.push({ ...friend, isOnline: false })
		})
		setOnlineFriends(onlineFriendsList)
	}
	return (
		<div className='grow w-full'>
			{onlineFriends?.map((friend) => (
				<FriendsListItem key={friend.id} id={friend.id} name={friend.userName} isOnline={friend.isOnline} />
			))}
		</div>
	)
}
