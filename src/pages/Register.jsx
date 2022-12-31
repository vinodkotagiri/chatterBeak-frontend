import React, { useEffect, useState } from 'react'
import { AuthLayout, RegisterHeader, RegisterInputs, RegisterFooter } from '../components'
import { validateRegisterForm } from '../helpers/validation'
export default function Register() {
	const [email, setEmail] = useState('')
	const [userName, setUserName] = useState('')
	const [password, setPassword] = useState('')
	const [isFormValid, setIsFormValid] = useState(false)

	useEffect(() => {
		setIsFormValid(validateRegisterForm(userName, email, password))
	}, [userName, email, password])

	const handleRegister = () => {}
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
