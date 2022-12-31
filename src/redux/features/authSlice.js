import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	userInfo: null,
	token: null,
}

const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		setUser: (state, action) => {
			state.userInfo = action.payload.userInfo
			state.token = action.payload.token
			localStorage.setItem('auth', JSON.stringify(action.payload))
		},
		removeUser: (state) => {
			state = initialState
			localStorage.removeItem('auth')
		},
	},
})
export const { setUser, removeUser } = authSlice.actions
export default authSlice.reducer
