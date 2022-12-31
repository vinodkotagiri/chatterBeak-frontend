import React from 'react'

export default function InputWithLabel(props) {
	const { value, setValue, label, type, placeholder } = props
	const handleChange = (e) => {
		setValue(e.target.value)
	}
	return (
		<div className='flex flex-col justify-center w-full my-3'>
			<label className='text-gray-400 uppercase font-semibold text-lg my-1'>{label}</label>
			<input
				className='flex-grow-1 h-10 border-[1px] border-black rounded-sm bg-[#35393f] text-[#dcddde] px-1 text-md'
				type={type}
				placeholder={placeholder}
				onChange={handleChange}
				value={value}
			/>
		</div>
	)
}
