import React, { useState } from 'react'
import { MdMic, MdMicOff } from 'react-icons/md'
export default function MicButton() {
	const [micEnabled, setMicEnabled] = useState(false)
	const handleToggleMic = () => {
		setMicEnabled((prev) => !prev)
	}
	return (
		<div className='cursor-pointer text-white flex items-center justify-center text-3xl'>
			{micEnabled ? <MdMic onClick={handleToggleMic} /> : <MdMicOff onClick={handleToggleMic} />}
		</div>
	)
}
