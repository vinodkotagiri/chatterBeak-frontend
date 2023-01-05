import React, { useState } from 'react'
import { MdScreenShare, MdStopScreenShare } from 'react-icons/md'
export default function ScreenShareButton() {
	const [shareEnabled, setShareEnabled] = useState(false)
	const handleToggleScreenShare = () => {
		setShareEnabled((prev) => !prev)
	}
	return (
		<div className='cursor-pointer text-white flex items-center justify-center text-3xl'>
			{shareEnabled ? (
				<MdScreenShare onClick={handleToggleScreenShare} />
			) : (
				<MdStopScreenShare onClick={handleToggleScreenShare} />
			)}
		</div>
	)
}
