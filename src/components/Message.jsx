import React from 'react'
import { Avatar } from '../components'
export default function Message({ content, sameAuthor, userName, sameDay, date }) {
	if (sameAuthor && sameDay) {
		return (
			<div className='text-[#dcddde] w-[97%] '>
				<span className='ml-[70px]'>{content}</span>
			</div>
		)
	}

	return (
		<div className={`w-[97%] flex mt-3 `}>
			<div className='w-[70px]'>{userName && <Avatar userName={userName} />}</div>
			<div className='flex flex-col'>
				<div className='text-lg text-white'>
					{userName}&nbsp;<span className='text-sm text-[#72767d]'>{date}</span>
				</div>
				<div className='text-[#dcddde]'>{content}</div>
			</div>

			<span className='ml-[70px]'></span>
		</div>
	)
}
