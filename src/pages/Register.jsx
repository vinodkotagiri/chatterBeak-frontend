import React, { useEffect, useState } from 'react'
import { toast } from 'react-hot-toast'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { AuthLayout, RegisterHeader, RegisterInputs, RegisterFooter } from '../components'
import { validateRegisterForm } from '../helpers/validation'
import { register } from '../services/authServices'
import { setUser } from '../redux/features/authSlice'
export default function Register() {
	const [email, setEmail] = useState('')
	const [userName, setUserName] = useState('')
	const [password, setPassword] = useState('')
	const [isFormValid, setIsFormValid] = useState(false)
	const dispatch = useDispatch()
	const navigate = useNavigate()
	useEffect(() => {
		setIsFormValid(validateRegisterForm(userName, email, password))
	}, [userName, email, password])

	const handleRegister = () => {
		register({ userName, email, password })
			.then((response) => {
				dispatch(setUser(response?.data))
				toast.success('Registration succesful!')
				navigate('/dashboard')
			})
			.catch((error) => toast.error(error?.response?.data))
	}
	return (
		<AuthLayout source='register'>
			<RegisterHeader />
			<RegisterInputs
				email={email}
				setEmail={setEmail}
				password={password}
				setPassword={setPassword}
				userName={userName}
				setUserName={setUserName}
			/>
			<RegisterFooter handleRegister={handleRegister} isFormValid={isFormValid} />
		</AuthLayout>
	)
}
