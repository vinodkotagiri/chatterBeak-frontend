import React from 'react'

export default function ChoosenChatLabel({ name }) {
	return (
		<div className='text-lg text-white font-bold'>
			Chat with <span className='italic text-green-400'>{name ? name : ''}</span>
		</div>
	)
}
