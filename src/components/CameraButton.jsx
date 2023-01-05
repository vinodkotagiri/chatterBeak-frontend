import React, { useState } from 'react'
import { MdVideocam, MdVideocamOff } from 'react-icons/md'
export default function CameraButton() {
	const [cameraEnabled, setCameraEnabled] = useState(false)
	const handleToggleCamera = () => {
		setCameraEnabled((prev) => !prev)
	}
	return (
		<div className='cursor-pointer text-white flex items-center justify-center text-3xl'>
			{cameraEnabled ? <MdVideocam onClick={handleToggleCamera} /> : <MdVideocamOff onClick={handleToggleCamera} />}
		</div>
	)
}
