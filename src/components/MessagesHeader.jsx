import React from 'react'
import { Avatar } from '../components'
export default function MessagesHeader({ name }) {
	return (
		<>
			<div className='w-[98%] flex mt-3 items-center gap-6'>
				<Avatar userName={name || ''} large={true} />
				<div className='text-3xl font-semibold text-white'>{name}</div>
			</div>
			<div className='w-full h-1 bg-slate-500 mt-3 '></div>
		</>
	)
}
