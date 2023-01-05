import React from 'react'
import { MdCloseFullscreen, MdOpenInFull } from 'react-icons/md'
export default function RoomResizeButton({ isRoomMinimized, handleRoomResize }) {
	return (
		<div className='absolute bottom-3 right-3 text-white cursor-pointer'>
			{isRoomMinimized ? <MdOpenInFull onClick={handleRoomResize} /> : <MdCloseFullscreen onClick={handleRoomResize} />}
		</div>
	)
}
