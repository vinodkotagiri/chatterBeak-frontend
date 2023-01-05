import React, { useState } from 'react'
import RoomControlButtons from './RoomControlButtons'
import RoomResizeButton from './RoomResizeButton'
import RoomVideoContainer from './RoomVideoContainer'

export default function Room() {
	const fullScreenRoomStyle = {
		width: '100%',
		height: '100vh',
	}
	const minimizedRoomStyle = {
		width: '30%',
		height: '40vh',
		bottom: '10px',
		right: '10px',
	}
	const [isMinimized, setIsMinimized] = useState(true)
	const handleRoomResize = () => {
		setIsMinimized((prev) => !prev)
	}
	return (
		<div
			className='absolute rounded-lg flex flex-col items-center justify-center bg-[#202225]'
			style={isMinimized ? minimizedRoomStyle : fullScreenRoomStyle}>
			<RoomVideoContainer />
			<RoomControlButtons />
			<RoomResizeButton isRoomMinimized={isMinimized} handleRoomResize={handleRoomResize} />
		</div>
	)
}
