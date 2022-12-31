import React from 'react'
import ToolTip from './ToolTip'
export default function PrimaryButton({ label, additionalStyles, disabled, onClick, toolText }) {
	const defaultTooltext = toolText ? toolText : 'Enter correct details. Password should be between 6 to 12 characters'
	return (
		<ToolTip text={`${disabled ? defaultTooltext : 'Click to continue'}`}>
			<button
				className={`bg-[#5865F2] text-white capitalize font-semibold h-10 my-3 w-full ${
					disabled ? 'bg-gray-600 cursor-not-allowed' : ''
				}`}
				style={additionalStyles ? additionalStyles : {}}
				disabled={disabled}
				onClick={onClick}>
				{label}
			</button>
		</ToolTip>
	)
}
