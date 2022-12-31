import React from 'react'
import PrimaryButton from './PrimaryButton'
import RedirectInfo from './RedirectInfo'

export default function LoginFooter({ handleLogin, isFormValid }) {
	return (
		<>
			<PrimaryButton label='login' onClick={handleLogin} disabled={!isFormValid} />
			<RedirectInfo text="Don't have an account?" redirectText='Register' additionalStyles={{ marginTop: '5px' }} />
		</>
	)
}
