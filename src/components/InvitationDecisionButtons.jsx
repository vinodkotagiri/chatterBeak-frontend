import React from 'react'
import { MdCheck, MdClear } from 'react-icons/md'
export default function InvitationDecisionButtons({ disabled, acceptInvitation, rejectInvitation }) {
	return (
		<div className='flex mr-4 gap-4'>
			<button className='text-green-600 font-semibold' onClick={acceptInvitation}>
				<MdCheck />
			</button>
			<button className='text-red-600 font-semibold' onClick={rejectInvitation}>
				<MdClear />
			</button>
		</div>
	)
}
