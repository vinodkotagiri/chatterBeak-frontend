import React from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { removeUser } from '../redux/features/authSlice'
export default function DropdownMenu({ setOpen }) {
	const dispatch = useDispatch()
	const navigate = useNavigate()
	const handleOpenMenu = () => {
		setOpen((prev) => !prev)
	}
	const handleLogout = () => {
		dispatch(removeUser())
		navigate('/login')
	}
	return (
		<div
			className='w-[80px] absolute top-14 right-5 bg-[#202225] text-white font-semibold rounded-xl shadow-xl flex flex-col items-center cursor-pointer overflow-hidden'
			onClick={handleOpenMenu}>
			<div className='hover:bg-blue-400 w-full flex justify-center' onClick={handleLogout}>
				Logout
			</div>
		</div>
	)
}
