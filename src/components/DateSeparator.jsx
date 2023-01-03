import React from 'react'

export default function DateSeparator({ date }) {
	return (
		<div className='w-[95%] h-[1px] my-2 mb-2 relative bg-[#b9bbbe]'>
			<span className='bg-[#36393f] absolute left-[45%] top-[-10px] text-[#b9bbbe] px-1 text-sm'>{date}</span>
		</div>
	)
}
