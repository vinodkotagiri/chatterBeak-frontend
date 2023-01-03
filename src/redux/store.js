import { configureStore } from '@reduxjs/toolkit'
import authReducer from './features/authSlice'
import friendInvitationReducer from './features/friendInvitaion'
import chatReducer from './features/chatSlice'
export const store = configureStore({
	reducer: {
		auth: authReducer,
		friendInvitation: friendInvitationReducer,
		chat: chatReducer,
	},
})
