import React from 'react'
import { MdAdd } from 'react-icons/md'
import { useDispatch } from 'react-redux'
import { createNewRoom } from '../realtimeCommunications/socketConnection'
import { setIsUserInRoom, SetIsUserRoomCreator } from '../redux/features/groupVideoChat'
export default function CreateRoomButton() {
	const dispatch = useDispatch()
	const handleNewRoomCreate = () => {
		dispatch(setIsUserInRoom(true))
		dispatch(SetIsUserRoomCreator(true))
		createNewRoom()
	}
	return (
		<button
			className='w-12 h-12 rounded-2xl m-0 p-0 w-min-0 mt-[10px] text-white bg-[#5865f2] flex items-center justify-center'
			onClick={handleNewRoomCreate}>
			<MdAdd size={30} />
		</button>
	)
}
