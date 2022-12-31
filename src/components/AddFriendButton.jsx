import React from 'react'
import PrimaryButton from './PrimaryButton'

export default function AddFriendButton({ setOpenDialouge }) {
	const additionalStyles = {
		marginTop: '10px',
		marginLeft: '5px',
		padding: '0 32px',
		height: '40px',
		borderRadius: '8px',
		backgroundColor: '#3ba55d',
	}
	const handleOpenAddFriend = () => {
		setOpenDialouge(true)
	}
	return (
		<>
			<PrimaryButton additionalStyles={additionalStyles} label='Add Friend' onClick={handleOpenAddFriend} />
		</>
	)
}
