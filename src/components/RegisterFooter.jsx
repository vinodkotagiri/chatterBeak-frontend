import React from 'react'
import PrimaryButton from './PrimaryButton'
import RedirectInfo from './RedirectInfo'
export default function RegisterFooter({ handleRegister, isFormValid }) {
	return (
		<>
			<PrimaryButton label='register' onClick={handleRegister} disabled={!isFormValid} />
			<RedirectInfo text='Already have an account?' redirectText='Login' additionalStyles={{ marginTop: '5px' }} />
		</>
	)
}
