import React from 'react'
import { Avatar, OnlineIndicator } from '../components'
export default function FriendsListItem({ id, name, isOnline }) {
	return (
		<>
			<button className='w-full h-12 mt-3 flex items-center justify-start text-black relative'>
				<Avatar userName={name} />
				<div className='ml-2 font-bold text-[#8e9297] text-left'>{name}</div>
				{isOnline && <OnlineIndicator />}
			</button>
		</>
	)
}
