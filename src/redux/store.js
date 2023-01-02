import { configureStore } from '@reduxjs/toolkit'
import authReducer from './features/authSlice'
import friendInvitationReducer from './features/friendInvitaion'
export const store = configureStore({
	reducer: {
		auth: authReducer,
		friendInvitation: friendInvitationReducer,
	},
})
