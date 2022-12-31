import React from 'react'
import InputWithLabel from './InputWithLabel'
export default function RegisterInputs({ email, setEmail, password, setPassword, userName, setUserName }) {
	return (
		<>
			<InputWithLabel
				value={userName}
				setValue={setUserName}
				type='text'
				placeholder='Enter UserName'
				label='user name'
			/>
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
