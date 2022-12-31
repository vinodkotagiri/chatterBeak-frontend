import React, { useEffect } from 'react'
import { Toaster } from 'react-hot-toast'
import { useDispatch } from 'react-redux'
import { Route, Routes } from 'react-router'
import { Register, Login, Dashboard } from './pages'
import { setUser } from './redux/features/authSlice'
export default function App() {
	const dispatch = useDispatch()
	useEffect(() => {
		if (localStorage.getItem('auth')) dispatch(setUser(JSON.parse(localStorage.getItem('auth'))))
	}, [])
	return (
		<>
			<Routes>
				<Route path='/login' element={<Login />} />
				<Route path='/register' element={<Register />} />
				<Route path='/dashboard' element={<Dashboard />} />
			</Routes>
			<Toaster position='top-center' reverseOrder={false} />
		</>
	)
}
