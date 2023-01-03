import React from 'react'
import { useSelector } from 'react-redux'
import { DateSeparator, Message, MessagesHeader } from '../components'
import convertToRedableDate from '../helpers/convertToRedableDate'
export default function Messages() {
	const { messages, choosenChatDetails } = useSelector((state) => state.chat)

	return (
		<div className='h-[calc(100%-60px)] overflow-auto flex flex-col items-center'>
			<MessagesHeader name={choosenChatDetails?.name} />
			{messages &&
				messages.map((message, index) => {
					const sameAuthor = index > 0 && messages[index].author === messages[index - 1].author._id
					const sameDay =
						index > 0 &&
						convertToRedableDate(new Date(message.date), 'dd/mm/yy') ===
							convertToRedableDate(new Date(messages[index - 1].date), 'dd/mm/yy')
					return (
						<div key={message._id} className='w-[97%]'>
							{(!sameDay || index === 0) && (
								<DateSeparator date={convertToRedableDate(new Date(message.date), 'dd/mm/yy')} />
							)}
							<Message
								userName={message?.author?.userName}
								message={message?.content}
								content={message?.content}
								sameAuthor={sameAuthor}
								date={convertToRedableDate(new Date(message.date), 'dd/mm/yy')}
								sameDay={sameDay}
							/>
						</div>
					)
				})}
		</div>
	)
}
