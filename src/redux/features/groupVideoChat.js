import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	isUserInRoom: false,
	isUserRoomCreator: false,
	roomDetails: null,
	activeRooms: [],
	localStream: null,
	remoteStreams: [],
	audioOnly: false,
	screenSharingStream: null,
	isScreenSharingActive: false,
}

const groupVideoSlice = createSlice({
	name: 'groupVideo',
	initialState,
	reducers: {
		setIsUserInRoom: (state, action) => {
			state.isUserInRoom = action.payload
		},
		SetIsUserRoomCreator: (state, action) => {
			state.isUserRoomCreator = action.payload
		},
		setRoomDetails: (state, action) => {
			state.roomDetails = action.payload
		},
		setActiveRooms: (state, action) => {
			console.log(action.payload)
			// state.activeRooms = action.payload
		},
		setLocalStream: (state, action) => {
			state.localStream = action.payload
		},
		setremoteStreams: (state, action) => {
			state.remoteStreams = action.payload
		},
		setAudioOnly: (state, action) => {
			state.audioOnly = action.payload
		},
		setScreenShareStream: (state, action) => {
			state.screenSharingStream = action.payload
		},
	},
})
export const {
	setRoomDetails,
	setActiveRooms,
	setLocalStream,
	setremoteStreams,
	setAudioOnly,
	setScreenShareStream,
	setIsUserInRoom,
	SetIsUserRoomCreator,
} = groupVideoSlice.actions
export default groupVideoSlice.reducer
