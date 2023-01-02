import React, { useEffect } from 'react'
import { Toaster } from 'react-hot-toast'
import { useDispatch } from 'react-redux'
import { Navigate, Route, Routes } from 'react-router'
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
				<Route path='/' element={<Navigate to='/dashboard' />} />
				<Route path='/login' element={<Login />} />
				<Route path='/register' element={<Register />} />
				<Route path='/dashboard' element={<Dashboard />} />
				<Route path='*' element={<Navigate to='/dashboard' />} />
			</Routes>
			<Toaster position='top-center' reverseOrder={false} />
		</>
	)
}
