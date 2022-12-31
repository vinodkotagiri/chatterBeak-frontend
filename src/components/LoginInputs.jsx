import React from 'react'
import InputWithLabel from './InputWithLabel'
export default function LoginInputs({ email, setEmail, password, setPassword }) {
	return (
		<>
			<InputWithLabel value={email} setValue={setEmail} type='email' placeholder='Enter email' label='email' />
			<InputWithLabel
				value={password}
				setValue={setPassword}
				type='password'
				placeholder='Enter Password'
				label='password'
			/>
		</>
	)
}
