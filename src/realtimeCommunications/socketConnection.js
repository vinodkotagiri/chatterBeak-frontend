import io from 'socket.io-client'
import { setPendingInvitaions, setFriends, setOnlineUsers } from '../redux/features/friendInvitaion'
import { store } from '../redux/store'
export const connectToSockerServer = (auth) => {
	const { token } = auth
	const socket = io(process.env.REACT_APP_API, {
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
}
