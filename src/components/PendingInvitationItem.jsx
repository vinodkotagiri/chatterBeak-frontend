import React, { useState } from 'react'
import { toast } from 'react-hot-toast'
import { Avatar, ToolTip, InvitationDecisionButtons } from '../components'
import { acceptInvitation, rejectInvitation } from '../services/friendInvitationServices'
export default function PendingInvitationItem({ id, userName, email }) {
	const [buttonsDisabled, setButtonsDisabled] = useState(false)
	const handleAcceptInvitation = () => {
		acceptInvitation(id)
			.then((response) => toast.success(response.data))
			.catch((error) => toast.error(error?.response.data))
		setButtonsDisabled(true)
	}
	const handleRejectInvitation = () => {
		rejectInvitation(id)
			.then((response) => toast.success(response.data))
			.catch((error) => toast.error(error?.response.data))
		setButtonsDisabled(true)
	}
	return (
		<ToolTip text={email}>
			<div className='w-full flex items-center justify-between'>
				<div className='w-full h-12 mt-3 flex items-center justify-start text-black relative'>
					<Avatar userName={userName} />
					<div className='ml-2 font-bold text-[#8e9297] text-left'>{userName}</div>
				</div>
				<div className='flex items-center h-12 mt-3'>
					<InvitationDecisionButtons
						disabled={buttonsDisabled}
						acceptInvitation={handleAcceptInvitation}
						rejectInvitation={handleRejectInvitation}
					/>
				</div>
			</div>
		</ToolTip>
	)
}
