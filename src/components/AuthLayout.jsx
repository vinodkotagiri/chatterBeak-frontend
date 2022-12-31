import React from 'react'

export default function AuthLayout({ children, source }) {
	return (
		<div className='w-[100%] h-[100vh] flex items-center justify-center bg-[#54214A]'>
			<div
				className={`w-[700px] h-[400px] bg-[#36393F] rounded-md shadow-lg flex flex-col p-6 ${
					source === 'register' ? 'h-auto' : ''
				}`}>
				{children}
			</div>
		</div>
	)
}
