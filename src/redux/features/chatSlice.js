import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	choosenChatDetails: null,
	chatType: null,
	messages: [],
}

const chatSlice = createSlice({
	name: 'chat',
	initialState,
	reducers: {
		setChoosenChatDetails: (state, action) => {
			state.choosenChatDetails = action.payload.chatDetails
			state.chatType = action.payload.chatType
		},
		setMessages: (state, action) => {
			state.messages = action.payload
		},
	},
})
export const { setChoosenChatDetails, setMessages } = chatSlice.actions
export default chatSlice.reducer
