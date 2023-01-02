import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	friends: [],
	pendingInvitations: [],
	onlineUsers: [],
}

const friendInvitationSlice = createSlice({
	name: 'friendInvitation',
	initialState,
	reducers: {
		setPendingInvitaions: (state, action) => {
			state.pendingInvitations = action.payload
		},
		setFriends: (state, action) => {
			state.friends = action.payload
		},
		setOnlineUsers: (state, action) => {
			state.onlineUsers = action.payload
		},
	},
})
export const { setPendingInvitaions, setFriends, setOnlineUsers } = friendInvitationSlice.actions
export default friendInvitationSlice.reducer
