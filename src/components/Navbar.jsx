import React, { useState } from 'react'
import { BsThreeDotsVertical } from 'react-icons/bs'
import { useSelector } from 'react-redux'
import { ChoosenChatLabel, DropdownMenu } from '../components'
export default function Navbar() {
	const [openMenu, setOpenMenu] = useState(false)
	const { userInfo } = useSelector((state) => state.auth)
	const name = useSelector((state) => state.chat.choosenChatDetails?.name)
	return (
		<div className='flex absolute top-0 right-0 h-12 border-b-[1px] border-b-black bg-[#36393f] w-[calc(100%-296px)] items-center justify-between px-16'>
			<ChoosenChatLabel name={name} />
			<div className='items-center text-xl text-white'>{userInfo?.userName}</div>
			<BsThreeDotsVertical
				className='text-white absolute  right-6 cursor-pointer'
				size={24}
				onClick={() => setOpenMenu((prev) => !prev)}
			/>
			{openMenu && <DropdownMenu setOpen={setOpenMenu} />}
		</div>
	)
}
