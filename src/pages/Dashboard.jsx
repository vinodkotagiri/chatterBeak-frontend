import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Sidebar, Navbar, Messenger, Friendsbar } from '../components'
import { connectToSockerServer } from '../realtimeCommunications/socketConnection'
export default function Dashboard() {
	const auth = JSON.parse(localStorage.getItem('auth'))
	const navigate = useNavigate()
	useEffect(() => {
		if (!auth) navigate('/login')
		else connectToSockerServer(auth)
	}, [auth])
	return (
		<div className='w-full h-[100vh] flex'>
			<Sidebar />
			<Friendsbar />
			<Messenger />
			<Navbar />
		</div>
	)
}
