import React, { useEffect, useState } from 'react'
import { validateEmail } from '../helpers/validation'
import { MdClose } from 'react-icons/md'
import InputWithLabel from './InputWithLabel'
import PrimaryButton from './PrimaryButton'
import { invite } from '../services/friendInvitationServices'
import { toast } from 'react-hot-toast'
export default function AddFriendsDialouge({ setOpen }) {
	const [email, setEmail] = useState('')
	const [isFormValid, setIsFormValid] = useState(false)
	useEffect(() => {
		setIsFormValid(validateEmail(email))
	}, [email])
	const handleSendFriendInvitation = () => {
		invite(email)
			.then((response) => {
				toast.success(response?.data)
				setOpen(false)
			})
			.catch((error) => {
				toast.error(error?.response?.data)
				setOpen(false)
			})
	}
	return (
		<div className='fixed top-[50%] left-[50%] w-[600px] h-[300px] border-2 translate-x-[-50%] translate-y-[-50%] bg-slate-400 rounded-xl shadow-2xl p-6 '>
			<MdClose
				size={24}
				className='absolute right-[8px] top-[8px] text-gray-700 cursor-pointer'
				onClick={() => setOpen(false)}
			/>
			<div className='text-2xl font-bold text-gray-800'>Invite a friend</div>
			<div className='text-xl mt-12'>Enter the email address of your friend to invite</div>
			<InputWithLabel value={email} setValue={setEmail} label='' type='email' placeholder='joncena@wwe.com' />
			<PrimaryButton
				onClick={handleSendFriendInvitation}
				disabled={!isFormValid}
				label='send'
				toolText='Enter valid email'
			/>
		</div>
	)
}
