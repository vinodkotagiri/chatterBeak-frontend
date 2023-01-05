import React from 'react'
import CameraButton from './CameraButton'
import CloseRoomButton from './CloseRoomButton'
import MicButton from './MicButton'
import ScreenShareButton from './ScreenShareButton'

export default function RoomControlButtons() {
	return (
		<div className='absolute h-[15%] w-full bg-[#5865f2] rounded-t-lg items-center justify-center bottom-0 flex gap-6'>
			<CameraButton />
			<MicButton />
			<ScreenShareButton />
			<CloseRoomButton />
		</div>
	)
}
