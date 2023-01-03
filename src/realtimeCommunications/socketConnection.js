import io from 'socket.io-client'
import { setPendingInvitaions, setFriends, setOnlineUsers } from '../redux/features/friendInvitaion'
import { setMessages } from '../redux/features/chatSlice'
import { store } from '../redux/store'
let socket = null
export const connectToSockerServer = (auth) => {
	const { token } = auth
	socket = io(process.env.REACT_APP_API, {
		auth: {
			token,
		},
	})
	socket.on('connect', () => {
		console.log('Connected to socket server: ' + socket.id)
	})
	socket.on('friends-invitations', (data) => {
		const { pendingInvitations } = data
		store.dispatch(setPendingInvitaions(pendingInvitations))
	})
	socket.on('friends-list', (data) => {
		const { friends } = data
		store.dispatch(setFriends(friends))
	})
	socket.on('online-users', (data) => {
		const { onlineUsers } = data
		store.dispatch(setOnlineUsers(onlineUsers))
	})
	socket.on('direct-chat-history', (data) => {
		updateDirectChatHistoryIfActive(data)
	})
}
export const sendDirectMessage = (data) => {
	socket.emit('direct-message', data)
}
export const getDirectChatHistory = (data) => {
	socket.emit('direct-chat-history', data)
}

function updateDirectChatHistoryIfActive(data) {
	const { participants, messages } = data
	const receiverId = store.getState().chat.choosenChatDetails?.id
	const userId = store.getState().auth.userInfo?._id

	if (receiverId && userId) {
		const usersInConversation = [receiverId, userId]
		updateChatHistoryIfSameConversationActive({
			participants,
			usersInConversation,
			messages,
		})
	}
}
function updateChatHistoryIfSameConversationActive({ participants, usersInConversation, messages }) {
	const result = participants.every(function (participantId) {
		return usersInConversation.includes(participantId)
	})
	if (result) {
		console.log(messages)
		store.dispatch(setMessages(messages))
	}
}