import React from 'react'
import { Sidebar, Navbar, Messenger, Friendsbar } from '../components'
export default function Dashboard() {
	return (
		<div className='w-full h-[100vh] flex'>
			<Sidebar />
			<Friendsbar />
			<Messenger />
			<Navbar />
		</div>
	)
}
