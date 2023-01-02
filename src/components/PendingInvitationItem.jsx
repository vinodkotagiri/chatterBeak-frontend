import React, { useState } from 'react'
import { Avatar, ToolTip, InvitationDecisionButtons } from '../components'
export default function PendingInvitationItem({
	id,
	userName,
	email,
	acceptInvitation = () => {},
	rejectInvitation = () => {},
}) {
	const [buttonsDisabled, setButtonsDisabled] = useState(false)
	const handleAcceptInvitation = () => {
		acceptInvitation({ id })
		setButtonsDisabled(true)
	}
	const handleRejectInvitation = (id) => {
		rejectInvitation({ id })
		setButtonsDisabled(true)
	}
	return (
		<ToolTip text={email}>
			<div className='w-full flex items-center justify-between'>
				<div className='w-full h-12 mt-3 flex items-center justify-start text-black relative'>
					<Avatar userName={userName} />
					<div className='ml-2 font-bold text-[#8e9297] text-left'>{userName}</div>
				</div>
				<InvitationDecisionButtons
					disabled={buttonsDisabled}
					acceptInvitation={handleAcceptInvitation}
					rejectInvitation={handleRejectInvitation}
				/>
			</div>
		</ToolTip>
	)
}
