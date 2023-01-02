import React, { useEffect, useState } from 'react'
import { AuthLayout, LoginHeader, LoginInputs, LoginFooter } from '../components'
import { validateLoginForm } from '../helpers/validation'
import { useNavigate } from 'react-router-dom'
import { login } from '../services/authServices'
import { setUser } from '../redux/features/authSlice'
import { useDispatch } from 'react-redux'
import { toast } from 'react-hot-toast'
export default function Login() {
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [isFormValid, setIsFormValid] = useState(false)
	useEffect(() => {
		setIsFormValid(validateLoginForm(email, password))
	}, [email, password])
	const navigate = useNavigate()
	const dispatch = useDispatch()
	const handleLogin = () => {
		login({ email, password })
			.then((response) => {
				dispatch(setUser(response?.data))
				toast.success('Login succesful!')
				navigate('/dashboard')
			})
			.catch((error) => toast.error(error?.response?.data))
	}

	return (
		<AuthLayout>
			<LoginHeader />
			<LoginInputs email={email} setEmail={setEmail} password={password} setPassword={setPassword} />
			<LoginFooter handleLogin={handleLogin} isFormValid={isFormValid} />
		</AuthLayout>
	)
}
