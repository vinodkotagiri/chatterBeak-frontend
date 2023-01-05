import React from 'react'
import { MdClose } from 'react-icons/md'
export default function CloseRoomButton() {
	const handleClose = () => {}
	return (
		<div className='cursor-pointer text-white flex items-center justify-center text-3xl'>
			<MdClose onClick={handleClose} />
		</div>
	)
}
