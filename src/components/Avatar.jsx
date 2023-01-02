import React from 'react'

export default function Avatar({ userName, large }) {
	return (
		<div
			style={large ? { height: '80px', width: '80px' } : {}}
			className='h-10 w-10 bg-[#5865f2] rounded-[42px] flex items-center justify-center font-bold ml-1 text-white'>
			{userName.substring(0, 2)}
			{/* <img className='w-10 h-10 rounded-full' src='/docs/images/people/profile-picture-5.jpg' alt='Rounded avatar' /> */}
		</div>
	)
}
