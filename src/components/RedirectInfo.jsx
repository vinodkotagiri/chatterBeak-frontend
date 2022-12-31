import React from 'react'
import { Link } from 'react-router-dom'

export default function RedirectInfo({ additionalStyles, text, redirectText }) {
	return (
		<div className='text-[#7276D]' style={additionalStyles ? additionalStyles : {}}>
			{text}&nbsp;
			<Link to={`/${redirectText.toLowerCase()}`} className='text-[#00Aff4] font-semibold cursor-pointer capitalize'>
				{redirectText}
			</Link>
		</div>
	)
}
