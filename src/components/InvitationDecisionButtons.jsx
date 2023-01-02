import React from 'react'
import { MdCheck, MdClear } from 'react-icons/md'
export default function InvitationDecisionButtons({ disabled, acceptInvitation, rejectInvitation }) {
	return (
		<div className='flex mr-4 gap-4 items-center h-full'>
			<button className='text-green-600 font-semibold ' onClick={acceptInvitation}>
				<MdCheck className='hover:scale-150 hover:rotate-[360deg] duration-500' />
			</button>
			<button className='text-red-600 font-semibold' onClick={rejectInvitation}>
				<MdClear className='hover:scale-150 hover:rotate-[360deg] duration-500' />
			</button>
		</div>
	)
}
